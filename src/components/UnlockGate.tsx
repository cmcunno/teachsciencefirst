import React, { useState } from 'react';
import { Lock, Unlock, Eye, EyeOff, ShieldCheck, KeyRound, FlaskConical, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { verifyPasscode, TARGET_PASSWORD_HASH } from '../utils/crypto';
import heroImage from '../assets/images/science_portal_hero_1790860613718.jpg';

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
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter the access password.');
      return;
    }

    setIsVerifying(true);
    setError(null);

    try {
      const isValid = await verifyPasscode(password);
      if (isValid) {
        setIsVerifying(false);
        onUnlock(rememberMe);
      } else {
        setIsVerifying(false);
        setError('Incorrect passcode. The cryptographic hash did not match.');
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 600);
      }
    } catch {
      setIsVerifying(false);
      setError('Cryptographic verification failed. Please try again.');
    }
  };

  const handleQuickDemoFill = () => {
    setPassword('pyrexpyrex');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-cyan-900/20 via-sky-950/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top minimal header */}
      <header className="relative z-10 border-b border-slate-800/80 px-6 py-4 flex items-center justify-between backdrop-blur-sm bg-slate-950/70">
        <div className="flex items-center gap-2.5">
          <FlaskConical className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-semibold tracking-tight text-slate-100">
            Teach Science First
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Lock className="w-3.5 h-3.5 text-amber-400" />
          <span>PORTAL LOCKED</span>
        </div>
      </header>

      {/* Main Gate Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-10 my-auto">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual & Welcome Info */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono tracking-wider uppercase">
                <span>Science Curriculum & Repositories</span>
                <span aria-hidden="true">·</span>
                <span>SHA-256 Protected</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50 font-display">
                Teach Science First
              </h1>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                A dedicated portal for physics, chemistry, biology, and space sciences. Unlocking grants instant access to interactive simulation repositories, each opening its full <code className="text-cyan-300 font-mono bg-slate-900 px-1.5 py-0.5 rounded text-xs border border-slate-800">index.html</code> in a dedicated tab.
              </p>
            </div>

            {/* Scientific Hero Banner Preview */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800/80 shadow-2xl group">
              <img 
                src={heroImage} 
                alt="Pyrex science glassware and laboratory apparatus"
                className="w-full h-48 sm:h-56 object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  SHA-256: {TARGET_PASSWORD_HASH.slice(0, 10)}...{TARGET_PASSWORD_HASH.slice(-6)}
                </span>
                <span className="text-slate-400">Borosilicate Glassware Spec</span>
              </div>
            </div>

            {/* Quick feature list */}
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-400">
              <div className="p-3 bg-slate-900/60 border border-slate-800/60 rounded-lg">
                <div className="text-slate-200 font-medium mb-1">Interactive Repos</div>
                <div>KS3, KS4 &amp; KS5 biology, chemistry &amp; physics teaching modules.</div>
              </div>
              <div className="p-3 bg-slate-900/60 border border-slate-800/60 rounded-lg">
                <div className="text-slate-200 font-medium mb-1">Folder Structure Nav</div>
                <div>Full hierarchy: Key Stage → Subject → Concepts & Simulations.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Passcode Card */}
          <div className="lg:col-span-6">
            <div className={`bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-all duration-200 ${isShaking ? 'animate-[shake_0.4s_ease-in-out]' : ''}`}>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-100">Authenticate</h2>
                    <p className="text-xs text-slate-400">Enter teacher passcode to unlock repositories</p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="mb-5 p-3.5 bg-rose-950/50 border border-rose-800/80 rounded-lg text-rose-300 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                  <div>
                    <span className="font-semibold">Access Denied: </span>
                    {error}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="passcode-input" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="passcode-input"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter access passcode..."
                      autoFocus
                      className="w-full px-3.5 py-2.5 bg-slate-950/90 border border-slate-700/80 rounded-lg text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors p-1"
                      title={showPassword ? "Hide password" : "Show password"}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer select-none text-slate-300">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded bg-slate-950 border-slate-700 text-cyan-600 focus:ring-cyan-500/30"
                    />
                    <span>Remember on this browser</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => setShowHint(!showHint)}
                    className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors cursor-pointer"
                  >
                    {showHint ? 'Hide Hint' : 'Need Hint?'}
                  </button>
                </div>

                {showHint && (
                  <div className="p-3 bg-cyan-950/30 border border-cyan-800/40 rounded-lg text-xs text-cyan-300 space-y-1.5">
                    <div className="font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Teacher Access Passcode:</span>
                    </div>
                    <p className="text-slate-300">
                      The passcode is the iconic borosilicate heat-resistant laboratory glassware brand, written twice with no spaces:
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <code className="bg-slate-950 px-2 py-1 rounded border border-cyan-700/60 font-mono text-cyan-200 text-xs">
                        pyrexpyrex
                      </code>
                      <button
                        type="button"
                        onClick={handleQuickDemoFill}
                        className="px-2 py-1 bg-cyan-700/40 hover:bg-cyan-700/60 text-cyan-200 text-xs rounded transition-colors font-medium"
                      >
                        Auto-fill Passcode
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full mt-2 py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-slate-950 font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/50 cursor-pointer disabled:opacity-50"
                >
                  {isVerifying ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Hashing & Validating...</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="w-4 h-4" />
                      <span>Unlock Teaching Portal</span>
                      <ArrowRight className="w-4 h-4 ml-0.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Hash Verification Note */}
              <div className="mt-6 pt-5 border-t border-slate-800 text-center">
                <p className="text-[11px] text-slate-500 font-mono">
                  SHA-256 Digest Validation · Private Educator Access
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900 px-6 py-4 text-center text-xs text-slate-500">
        Personal Science Teaching App · Borosilicate Lab Suite & Repositories · pyrexpyrex
      </footer>
    </div>
  );
};
