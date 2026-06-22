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
  const [fleetSize, setFleetSize] = useState("");
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
        body: JSON.stringify({ email: trimmed, fleetSize }),
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
          background: "rgba(90,170,40,0.08)",
          color: "#5aaa28",
          border: "1px solid rgba(90,170,40,0.3)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="9" fill="#7dd94a" fillOpacity="0.25" />
          <circle cx="9" cy="9" r="9" stroke="#7dd94a" strokeWidth="1" />
          <path d="M5 9.5l2.5 2.5 5-5" stroke="#7dd94a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        You&apos;re on the list. OrchardPatch is in active development with early fleets running now. We&apos;ll reach out as access opens up.
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

  const selectClass =
    size === "large"
      ? "w-full px-4 py-3.5 rounded-xl text-base outline-none transition-shadow appearance-none cursor-pointer"
      : "w-full px-4 py-3 rounded-xl text-sm outline-none transition-shadow appearance-none cursor-pointer";

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
            background: "#ffffff",
            border: `1px solid ${error ? "rgba(200,50,50,0.6)" : "#c5c5c7"}`,
            color: "#1d1d1f",
          }}
          aria-label="Email address"
          aria-describedby={error ? `${id}-error` : undefined}
          autoComplete="email"
        />
        <div className="w-full">
          <label
            htmlFor={`${id}-fleet-size`}
            className="block text-xs mb-1.5"
            style={{ color: "#6e6e73" }}
          >
            How many Macs do you manage? (optional)
          </label>
          <select
            id={`${id}-fleet-size`}
            value={fleetSize}
            onChange={(e) => setFleetSize(e.target.value)}
            className={selectClass}
            style={{
              background: "#ffffff",
              border: "1px solid #c5c5c7",
              color: fleetSize ? "#1d1d1f" : "#6e6e73",
            }}
            aria-label="Fleet size"
          >
            <option value="" style={{ background: "#ffffff", color: "#6e6e73" }}>
              Select a range...
            </option>
            <option value="1-10" style={{ background: "#ffffff", color: "#1d1d1f" }}>1–10</option>
            <option value="11-50" style={{ background: "#ffffff", color: "#1d1d1f" }}>11–50</option>
            <option value="51-200" style={{ background: "#ffffff", color: "#1d1d1f" }}>51–200</option>
            <option value="201-1,000" style={{ background: "#ffffff", color: "#1d1d1f" }}>201–1,000</option>
            <option value="1,000+" style={{ background: "#ffffff", color: "#1d1d1f" }}>1,000+</option>
          </select>
        </div>
        <button
          type="submit"
          className={buttonClass}
          style={{ background: "#4a7c2f" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#5a9438")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#4a7c2f")}
        >
          {buttonLabel}
        </button>
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 text-xs"
          style={{ color: "rgba(200,50,50,0.9)" }}
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
