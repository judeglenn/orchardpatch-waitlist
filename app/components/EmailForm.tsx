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
          background: "var(--orchard-green-pale)",
          color: "var(--orchard-green)",
          border: "1px solid #c5dba8",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="9" cy="9" r="9" fill="#2d5016" />
          <path
            d="M5 9.5l2.5 2.5 5-5"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
      <div
        className="flex flex-col gap-3 items-center w-full"
      >
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
            background: "white",
            border: `1.5px solid ${error ? "var(--orchard-red)" : "var(--orchard-border)"}`,
            color: "var(--orchard-text)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
          aria-label="Email address"
          aria-describedby={error ? `${id}-error` : undefined}
          autoComplete="email"
        />
        <button
          type="submit"
          className={buttonClass}
          style={{
            background: "var(--orchard-green)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--orchard-green-light)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--orchard-green)")
          }
        >
          {buttonLabel}
        </button>
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 text-xs"
          style={{ color: "var(--orchard-red)" }}
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
