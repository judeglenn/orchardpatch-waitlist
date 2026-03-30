import EmailForm from "./components/EmailForm";

function OrchardLogo({ size = 40 }: { size?: number }) {
  return (
    <img src="/logo.png" alt="OrchardPatch logo" width={size} height={size} style={{ objectFit: "contain" }} />
  );
}

function IconWarning() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2L20.5 19H1.5L11 2Z" stroke="#c0392b" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M11 9V13" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="16" r="0.75" fill="#c0392b" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2V5M11 17V20M2 11H5M17 11H20M4.93 4.93L7.05 7.05M14.95 14.95L17.07 17.07M17.07 4.93L14.95 7.05M7.05 14.95L4.93 17.07" stroke="#2d5016" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="11" r="3" fill="#2d5016" opacity="0.15" />
      <circle cx="11" cy="11" r="1.5" fill="#2d5016" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2L3 5.5V11C3 15.4 6.4 19.5 11 21C15.6 19.5 19 15.4 19 11V5.5L11 2Z" stroke="#2d5016" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M7.5 11L9.5 13L14.5 8" stroke="#2d5016" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="#2d5016" strokeWidth="1.5" fill="none" />
      <path d="M8 9C8 9 9 7 11 7C13 7 14 9 14 9" stroke="#2d5016" strokeWidth="1.25" strokeLinecap="round" fill="none" />
      <path d="M8 11H14" stroke="#2d5016" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M9 13H13" stroke="#2d5016" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function IconPkg() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="22" height="16" rx="3" stroke="#2d5016" strokeWidth="1.5" fill="none" />
      <path d="M3 12H25" stroke="#2d5016" strokeWidth="1.25" strokeDasharray="2 1.5" />
      <path d="M11 7V12" stroke="#2d5016" strokeWidth="1.25" />
      <path d="M17 7V12" stroke="#2d5016" strokeWidth="1.25" />
      <circle cx="14" cy="18.5" r="2.5" fill="#2d5016" opacity="0.25" />
      <path d="M12.5 18.5L13.5 19.5L15.5 17.5" stroke="#2d5016" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDiscover() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="13" cy="13" r="8" stroke="#2d5016" strokeWidth="1.5" fill="none" />
      <path d="M19 19L25 25" stroke="#2d5016" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 13H16M13 10V16" stroke="#2d5016" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function IconPatch() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3L17.5 8H23L19 12.5L21 18.5L14 15.5L7 18.5L9 12.5L5 8H10.5L14 3Z" stroke="#2d5016" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <circle cx="14" cy="12" r="2.5" fill="#2d5016" opacity="0.25" />
    </svg>
  );
}

function OrchardIllustration() {
  return (
    <svg viewBox="0 0 600 200" fill="none" aria-hidden="true" className="w-full opacity-[0.06] pointer-events-none select-none" style={{ maxWidth: "600px" }}>
      <ellipse cx="80" cy="80" rx="45" ry="55" fill="#2d5016" />
      <rect x="75" y="130" width="10" height="40" rx="3" fill="#2d5016" />
      <circle cx="65" cy="70" r="6" fill="#c0392b" /><circle cx="90" cy="60" r="5" fill="#c0392b" /><circle cx="82" cy="90" r="5.5" fill="#c0392b" /><circle cx="58" cy="95" r="4.5" fill="#c0392b" />
      <ellipse cx="220" cy="70" rx="50" ry="60" fill="#2d5016" />
      <rect x="215" y="125" width="10" height="45" rx="3" fill="#2d5016" />
      <circle cx="205" cy="58" r="6.5" fill="#c0392b" /><circle cx="230" cy="50" r="5" fill="#c0392b" /><circle cx="240" cy="75" r="6" fill="#c0392b" /><circle cx="215" cy="88" r="5" fill="#c0392b" /><circle cx="195" cy="75" r="4.5" fill="#c0392b" />
      <ellipse cx="380" cy="85" rx="42" ry="52" fill="#2d5016" />
      <rect x="375" y="132" width="10" height="38" rx="3" fill="#2d5016" />
      <circle cx="365" cy="72" r="5.5" fill="#c0392b" /><circle cx="388" cy="65" r="6" fill="#c0392b" /><circle cx="395" cy="90" r="5" fill="#c0392b" /><circle cx="370" cy="96" r="5" fill="#c0392b" />
      <ellipse cx="520" cy="75" rx="48" ry="58" fill="#2d5016" />
      <rect x="515" y="128" width="10" height="42" rx="3" fill="#2d5016" />
      <circle cx="505" cy="62" r="6" fill="#c0392b" /><circle cx="528" cy="55" r="5.5" fill="#c0392b" /><circle cx="538" cy="80" r="6" fill="#c0392b" /><circle cx="512" cy="88" r="5" fill="#c0392b" />
      <path d="M0 170 Q150 155 300 170 Q450 185 600 170" stroke="#2d5016" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--orchard-cream)" }}>

      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ background: "rgba(250, 247, 242, 0.88)", borderColor: "var(--orchard-border)" }}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5" aria-label="OrchardPatch home">
            <OrchardLogo size={32} />
            <span className="font-semibold text-base tracking-tight" style={{ color: "var(--orchard-green)" }}>OrchardPatch</span>
          </a>
          <a href="#waitlist" className="btn-green text-sm font-semibold px-4 py-2 rounded-lg">Get Early Access</a>
        </div>
      </header>

      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-20 pb-10 px-6" style={{ background: "var(--orchard-green)" }}>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none select-none">
            <OrchardIllustration />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(58,107,30,0.5) 0%, transparent 70%)" }} />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6"><OrchardLogo size={80} /></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              See Everything.<br />Patch Anything.<br />Break Nothing.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-3 leading-relaxed">
              OrchardPatch gives you complete visibility into your managed macOS fleet and keeps it patched —{" "}
              <strong className="text-white font-medium">without touching your MDM.</strong>
            </p>
            <p className="text-sm text-white/50 mb-10 italic">
              Your MDM handles enrollment. OrchardPatch handles visibility and compliance from there.
            </p>
            <div className="flex justify-center w-full mb-6">
              <EmailForm id="hero-form" buttonLabel="Get Early Access" size="large" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ height: "48px" }}>
            <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full" fill="none">
              <path d="M0 48H1440V12C1200 42 960 0 720 24C480 48 240 8 0 32V48Z" fill="var(--orchard-cream)" />
            </svg>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ color: "var(--orchard-red)", background: "#fdecea" }}>The Problem</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "var(--orchard-text)" }}>
                Admins deserve complete fleet-wide app visibility
              </h2>
              <p className="mt-3 text-base" style={{ color: "var(--orchard-muted)" }}>Most tools leave you flying blind.</p>
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
                <div key={heading} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--orchard-border)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                  <div className="mb-4"><IconWarning /></div>
                  <h3 className="font-semibold text-base mb-2" style={{ color: "var(--orchard-text)" }}>{heading}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--orchard-muted)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6"><div style={{ height: "1px", background: "var(--orchard-border)" }} /></div>

        {/* ── The Solution ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ color: "var(--orchard-green)", background: "var(--orchard-green-pale)" }}>The Solution</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "var(--orchard-text)" }}>
                Full visibility. Smart patching. Zero friction.
              </h2>
              <p className="mt-3 text-base" style={{ color: "var(--orchard-muted)" }}>OrchardPatch works alongside your existing MDM — not against it.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <IconSparkle />,
                  heading: "Automatic Discovery",
                  body: "See every app on every device the moment it appears. No manual setup, no catalog to configure. If it's installed, you know about it.",
                },
                {
                  icon: <IconBrain />,
                  heading: "Fleet Intelligence",
                  body: "Version conflicts, rogue installs, compliance gaps — surfaced automatically with actionable insight so you can act before users notice.",
                },
                {
                  icon: <IconShield />,
                  heading: "MDM-Safe Patching",
                  body: "A lightweight agent handles patching at the system level — no Secure Token, no MDM conflicts, no sudo tricks. Works on standard users. Guaranteed.",
                },
              ].map(({ icon, heading, body }) => (
                <div key={heading} className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "var(--orchard-green-pale)", border: "1px solid #c5dba8" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1.5" style={{ color: "var(--orchard-green)" }}>{heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a6b2a" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 px-6" style={{ background: "white", borderTop: "1px solid var(--orchard-border)", borderBottom: "1px solid var(--orchard-border)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ color: "var(--orchard-green)", background: "var(--orchard-green-pale)" }}>How It Works</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "var(--orchard-text)" }}>
                Up and running in minutes
              </h2>
              <p className="mt-3 text-base" style={{ color: "var(--orchard-muted)" }}>
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
                  body: "Choose Silent, Managed, or User Prompted. Hit Deploy. OrchardPatch handles the rest — powered by Installomator, 1,100+ supported apps.",
                },
              ].map(({ step, icon, heading, body }) => (
                <div key={step} className="flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: "var(--orchard-green-pale)", border: "2px solid #c5dba8", boxShadow: "0 2px 8px rgba(45,80,22,0.08)" }}>
                      {icon}
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "var(--orchard-green)" }}>
                      {step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1.5" style={{ color: "var(--orchard-text)" }}>{heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--orchard-muted)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="mt-14 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left" style={{ background: "var(--orchard-green-pale)", border: "1px solid #c5dba8" }}>
              <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                <IconShield />
              </div>
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--orchard-green)" }}>Built for enterprise — even hardened ones</p>
                <p className="text-sm" style={{ color: "#4a6b2a" }}>
                  Works in BeyondTrust and similar privilege-management environments. No admin rights needed. No sudo. The agent LaunchDaemon runs at system level — same pattern used by Jamf, Mosyle, and Kandji.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="py-12 px-6 border-b" style={{ borderColor: "var(--orchard-border)" }}>
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
            {[
              { stat: "1,100+", label: "apps supported via Installomator" },
              { stat: "3 modes", label: "Silent · Managed · User Prompted" },
              { stat: "0 MDM", label: "conflicts, ever" },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "var(--orchard-green)" }}>{stat}</div>
                <div className="text-xs sm:text-sm" style={{ color: "var(--orchard-muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Second CTA ── */}
        <section id="waitlist" className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--orchard-green)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(58,107,30,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(45,80,22,0.8) 0%, transparent 50%)" }} />
          <div className="absolute top-8 left-12 opacity-10 pointer-events-none select-none" aria-hidden="true"><OrchardLogo /></div>
          <div className="absolute bottom-8 right-16 opacity-10 pointer-events-none select-none scale-150" aria-hidden="true"><OrchardLogo /></div>

          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Be first to know when OrchardPatch launches.
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-lg mx-auto">
              Join Mac admins who&apos;ve had enough of cobbling together patch workflows. Early access is limited.
            </p>
            <EmailForm id="cta-form" buttonLabel="Join the Waitlist" placeholder="your@email.com" size="large" />
            <p className="mt-5 text-white/40 text-xs">No spam. No marketing fluff. Just a heads-up when it&apos;s ready.</p>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="px-6 py-10 border-t" style={{ borderColor: "var(--orchard-border)", background: "var(--orchard-cream-dark)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="flex items-center gap-2" aria-label="OrchardPatch">
              <OrchardLogo size={28} />
              <span className="font-semibold text-sm" style={{ color: "var(--orchard-green)" }}>orchardpatch.com</span>
            </a>
            <span className="hidden sm:inline text-sm" style={{ color: "var(--orchard-border)" }}>·</span>
            <span className="text-sm" style={{ color: "var(--orchard-muted)" }}>Built for Mac admins, by a Mac admin.</span>
          </div>
          <nav className="flex items-center gap-6" aria-label="Footer links">
            <a href="#" className="text-sm transition-colors hover:underline" style={{ color: "var(--orchard-muted)" }}>Privacy</a>
            <a href="mailto:info@orchardpatch.com" className="text-sm transition-colors hover:underline" style={{ color: "var(--orchard-muted)" }}>Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
