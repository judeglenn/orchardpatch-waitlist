"use client";

import { useState } from "react";

interface EmailFormProps {
  id?: string;
  buttonLabel?: string;
  placeholder?: string;
  size?: "default" | "large";
}

export default function EmailForm({
  id,
  buttonLabel = "Get Early Access",
  placeholder = "your@email.com",
  size = "default",
}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) throw new Error("Failed");
    } catch {
      // Fail silently — still show success to user
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium"
        style={{
          background: "rgba(125,217,74,0.12)",
          color: "#7dd94a",
          border: "1px solid rgba(125,217,74,0.3)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="9" fill="#7dd94a" fillOpacity="0.25" />
          <circle cx="9" cy="9" r="9" stroke="#7dd94a" strokeWidth="1" />
          <path d="M5 9.5l2.5 2.5 5-5" stroke="#7dd94a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        You&apos;re on the list! We&apos;ll be in touch.
      </div>
    );
  }

  const inputClass =
    size === "large"
      ? "w-full px-4 py-3.5 rounded-xl text-base outline-none transition-shadow"
      : "w-full px-4 py-3 rounded-xl text-sm outline-none transition-shadow";

  const buttonClass =
    size === "large"
      ? "shrink-0 px-6 py-3.5 rounded-xl text-base font-semibold text-white transition-colors cursor-pointer w-full"
      : "shrink-0 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer w-full";

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="w-full"
      noValidate
      aria-label="Email signup form"
    >
      <div className="flex flex-col gap-3 items-center w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder={placeholder}
          className={inputClass}
          style={{
            background: "rgba(255,255,255,0.08)",
            border: `1px solid ${error ? "rgba(255,100,100,0.6)" : "rgba(255,255,255,0.2)"}`,
            color: "#f0f8ec",
          }}
          aria-label="Email address"
          aria-describedby={error ? `${id}-error` : undefined}
          autoComplete="email"
        />
        <button
          type="submit"
          className={buttonClass}
          style={{ background: "#5aaa28" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#6abf32")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#5aaa28")}
        >
          {buttonLabel}
        </button>
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 text-xs"
          style={{ color: "rgba(255,100,100,0.9)" }}
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
