import EmailForm from "./components/EmailForm";

function Wordmark() {
  return (
    <span style={{ fontSize: "inherit", lineHeight: "inherit" }}>
      <span style={{ color: "#f0f8ec", fontWeight: 700, letterSpacing: "-0.02em" }}>Orchard</span>
      <span style={{ color: "#7dd94a", fontWeight: 700 }}>Patch</span>
    </span>
  );
}

function IconWarning() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2L20.5 19H1.5L11 2Z" stroke="rgba(255,80,80,0.8)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M11 9V13" stroke="rgba(255,80,80,0.8)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="16" r="0.75" fill="rgba(255,80,80,0.8)" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2V5M11 17V20M2 11H5M17 11H20M4.93 4.93L7.05 7.05M14.95 14.95L17.07 17.07M17.07 4.93L14.95 7.05M7.05 14.95L4.93 17.07" stroke="#7dd94a" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="11" r="3" fill="#7dd94a" opacity="0.15" />
      <circle cx="11" cy="11" r="1.5" fill="#7dd94a" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2L3 5.5V11C3 15.4 6.4 19.5 11 21C15.6 19.5 19 15.4 19 11V5.5L11 2Z" stroke="#7dd94a" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M7.5 11L9.5 13L14.5 8" stroke="#7dd94a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="#7dd94a" strokeWidth="1.5" fill="none" />
      <path d="M8 9C8 9 9 7 11 7C13 7 14 9 14 9" stroke="#7dd94a" strokeWidth="1.25" strokeLinecap="round" fill="none" />
      <path d="M8 11H14" stroke="#7dd94a" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M9 13H13" stroke="#7dd94a" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function IconPkg() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="22" height="16" rx="3" stroke="#7dd94a" strokeWidth="1.5" fill="none" />
      <path d="M3 12H25" stroke="#7dd94a" strokeWidth="1.25" strokeDasharray="2 1.5" />
      <path d="M11 7V12" stroke="#7dd94a" strokeWidth="1.25" />
      <path d="M17 7V12" stroke="#7dd94a" strokeWidth="1.25" />
      <circle cx="14" cy="18.5" r="2.5" fill="#7dd94a" opacity="0.25" />
      <path d="M12.5 18.5L13.5 19.5L15.5 17.5" stroke="#7dd94a" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDiscover() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="13" cy="13" r="8" stroke="#7dd94a" strokeWidth="1.5" fill="none" />
      <path d="M19 19L25 25" stroke="#7dd94a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 13H16M13 10V16" stroke="#7dd94a" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function IconPatch() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3L17.5 8H23L19 12.5L21 18.5L14 15.5L7 18.5L9 12.5L5 8H10.5L14 3Z" stroke="#7dd94a" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <circle cx="14" cy="12" r="2.5" fill="#7dd94a" opacity="0.25" />
    </svg>
  );
}

const glassCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
  borderRadius: "20px",
};

const solutionCard: React.CSSProperties = {
  background: "rgba(125,217,74,0.08)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(125,217,74,0.2)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
  borderRadius: "20px",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Nav ── */}
      <header className="sticky top-0 z-50" style={{ background: "rgba(8,15,5,0.75)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="text-base" aria-label="OrchardPatch home">
            <Wordmark />
          </a>
          <a
            href="#waitlist"
            className="btn-primary text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Get Early Access
          </a>
        </div>
      </header>

      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-24 pb-16 px-6">
          <div className="relative max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: "#f0f8ec" }}>
              Full Fleet Visibility.<br />Effortless Patching.
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              OrchardPatch gives you complete visibility into your managed macOS fleet and keeps it patched —{" "}
              <strong style={{ color: "#f0f8ec", fontWeight: 500 }}>without touching your MDM.</strong>
            </p>
            <p className="text-sm mb-10 italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Your MDM handles enrollment. OrchardPatch handles visibility and patching from there.
            </p>
            <div className="flex justify-center w-full mb-6 max-w-sm mx-auto">
              <EmailForm id="hero-form" buttonLabel="Get Early Access" size="large" />
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ color: "rgba(255,80,80,0.8)", background: "rgba(255,80,80,0.1)", border: "1px solid rgba(255,80,80,0.2)" }}>The Problem</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#f0f8ec" }}>
                Admins deserve complete fleet-wide app visibility
              </h2>
              <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.55)" }}>Most tools leave you flying blind.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  heading: "Your MDM only sees what you told it to watch",
                  body: "Miss an app during setup? It's invisible. Forget a Smart Group? Compliance gap. New software appears on devices? You won't know until something breaks.",
                },
                {
                  heading: "Third-party patching tools fight with your MDM",
                  body: "Most patching tools demand Secure Token access and wrestle Apple MDM for device ownership — creating conflicts, support nightmares, and breaking standard-user environments.",
                },
                {
                  heading: "DIY scripting is a second full-time job",
                  body: "Rolling your own means weeks of scripting before you see anything useful — then maintaining it forever while it quietly breaks on every macOS update.",
                },
              ].map(({ heading, body }) => (
                <div key={heading} className="p-6" style={glassCard}>
                  <div className="mb-4"><IconWarning /></div>
                  <h3 className="font-semibold text-base mb-2" style={{ color: "#f0f8ec" }}>{heading}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6"><div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} /></div>

        {/* ── The Solution ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ color: "#7dd94a", background: "rgba(125,217,74,0.1)", border: "1px solid rgba(125,217,74,0.25)" }}>The Solution</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#f0f8ec" }}>
                Full visibility. Smart patching. Zero friction.
              </h2>
              <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.55)" }}>OrchardPatch works alongside your existing MDM — not against it.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <IconSparkle />,
                  heading: "Automatic Discovery",
                  body: "No manual app lists. OrchardPatch discovers every installed app automatically, powered by Installomator\u2019s 1,000+ app labels.",
                },
                {
                  icon: <IconBrain />,
                  heading: "Fleet Visibility",
                  body: "See every app installed across your entire fleet \u2014 not just what your MDM was told to track. Catch drift before it becomes a problem.",
                },
                {
                  icon: <IconShield />,
                  heading: "MDM-Safe Patching",
                  body: "A lightweight agent handles patching at the system level — no Secure Token, no MDM conflicts, no sudo tricks. Works on standard users, even in BeyondTrust environments.",
                },
              ].map(({ icon, heading, body }) => (
                <div key={heading} className="p-6 flex flex-col gap-4" style={solutionCard}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1.5" style={{ color: "#7dd94a" }}>{heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ color: "#7dd94a", background: "rgba(125,217,74,0.1)", border: "1px solid rgba(125,217,74,0.25)" }}>How It Works</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#f0f8ec" }}>
                Up and running in minutes
              </h2>
              <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
                One pkg. One install. Your fleet in view.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 relative">
              {[
                {
                  step: "1",
                  icon: <IconPkg />,
                  heading: "Deploy the Agent",
                  body: "Install the OrchardPatch agent pkg via Jamf, your MDM, or by hand. It installs a lightweight LaunchDaemon — runs as root, works on standard users, no sudo required.",
                },
                {
                  step: "2",
                  icon: <IconDiscover />,
                  heading: "See Your Fleet",
                  body: "OrchardPatch immediately builds a complete inventory of every installed app across all managed devices. Version conflicts and outdated apps surface automatically.",
                },
                {
                  step: "3",
                  icon: <IconPatch />,
                  heading: "Patch with One Click",
                  body: "Choose Silent, Managed, or User Prompted. Hit Deploy. OrchardPatch handles the rest — powered by Installomator, 1,000+ supported apps.",
                },
              ].map(({ step, icon, heading, body }) => (
                <div key={step} className="flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}>
                      {icon}
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#5aaa28" }}>
                      {step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1.5" style={{ color: "#f0f8ec" }}>{heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="mt-14 px-6 py-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left" style={glassCard}>
              <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <IconShield />
              </div>
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "#7dd94a" }}>Built for enterprise — even hardened ones</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Works in BeyondTrust and similar privilege-management environments. No admin rights needed. No sudo. The agent LaunchDaemon runs at system level — same pattern used by Jamf, Mosyle, and Kandji.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-6 text-center px-8 py-8" style={glassCard}>
              {[
                { stat: "1,000+", label: "apps supported via Installomator" },
                { stat: "3 modes", label: "Silent · Managed · User Prompted" },
                { stat: "0 MDM", label: "conflicts, ever" },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "#7dd94a" }}>{stat}</div>
                  <div className="text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Second CTA ── */}
        <section id="waitlist" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse 60% 80% at 50% 60%, rgba(45,120,20,0.35) 0%, transparent 65%)" }} />
          <div className="relative max-w-2xl mx-auto text-center">
            <div className="px-8 py-12" style={glassCard}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "#f0f8ec" }}>
                OrchardPatch is in active development.
              </h2>
              <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
                Early fleets are running now. We&apos;re opening access gradually \u2014 join the list and we&apos;ll reach out when your spot is ready.
              </p>
              <EmailForm id="cta-form" buttonLabel="Join the Waitlist" placeholder="your@email.com" size="large" />
              <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>No spam. No marketing fluff. Just a heads-up when it&apos;s ready.</p>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="px-6 py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="text-sm" aria-label="OrchardPatch">
              <Wordmark />
            </a>
            <span className="hidden sm:inline text-sm" style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Built for Mac admins, by a Mac admin.</span>
          </div>
          <nav className="flex items-center gap-6" aria-label="Footer links">
            <a href="#" className="text-sm transition-colors hover:underline" style={{ color: "rgba(255,255,255,0.35)" }}>Privacy</a>
            <a href="mailto:info@orchardpatch.com" className="text-sm transition-colors hover:underline" style={{ color: "rgba(255,255,255,0.35)" }}>Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
