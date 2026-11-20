import React, { useState } from 'react';
import { Atom, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { verifyPasscode } from '../utils/crypto';

interface UnlockGateProps {
  onUnlock: (remember: boolean) => void;
}

export const UnlockGate: React.FC<UnlockGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter the password.');
      return;
    }
    setIsVerifying(true);
    setError(null);
    try {
      if (await verifyPasscode(password)) {
        onUnlock(rememberMe);
      } else {
        setError('That password isn’t right. Please try again.');
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 600);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen bg-page text-ink flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="w-12 h-12 rounded-xl bg-accent text-accent-ink flex items-center justify-center mb-5">
              <Atom className="w-6 h-6" />
            </span>
            <h1 className="font-display text-3xl font-semibold tracking-tight">Teach Science First</h1>
            <p className="mt-2 text-muted">Interactive science resources for KS3, GCSE and A-Level.</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-surface border border-line rounded-2xl p-6 shadow-[0_8px_30px_-16px_rgba(20,30,40,0.25)] ${
              isShaking ? 'animate-[shake_0.4s_ease-in-out]' : ''
            }`}
          >
            <label htmlFor="passcode-input" className="block text-sm font-medium text-ink mb-1.5">
              Teacher password
            </label>
            <div className="relative">
              <input
                id="passcode-input"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                autoComplete="current-password"
                aria-invalid={!!error}
                aria-describedby={error ? 'passcode-error' : undefined}
                className="w-full px-3.5 py-2.5 pr-11 bg-page border border-line-strong rounded-lg text-ink text-base focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded text-faint hover:text-ink cursor-pointer"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <p id="passcode-error" role="alert" className="mt-2 text-sm text-danger">
                {error}
              </p>
            )}

            <label className="mt-4 flex items-center gap-2 text-sm text-muted cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-[var(--color-accent)]"
              />
              Remember me on this computer
            </label>

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full mt-5 py-2.5 px-4 bg-accent hover:bg-accent-hover text-accent-ink font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isVerifying ? 'Checking…' : 'Unlock'}
              {!isVerifying && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
