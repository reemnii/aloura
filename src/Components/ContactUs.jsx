"use client";

import { useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const emailError =
    form.email && !emailPattern.test(form.email)
      ? "Please enter a valid email address."
      : "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);

    if (name === "email") {
      setErrors((current) => ({ ...current, email: "" }));
    }
  };

  const handleBlur = (event) => {
    if (event.target.name === "email") {
      setErrors((current) => ({
        ...current,
        email: emailPattern.test(form.email)
          ? ""
          : "Please enter a valid email address.",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {
      name: form.name.trim() ? "" : "Your name is required.",
      email: emailPattern.test(form.email)
        ? ""
        : "Please enter a valid email address.",
      message: form.message.trim()
        ? ""
        : "Tell us a little about your project.",
    };

    setErrors(nextErrors);

    const hasError = Object.values(nextErrors).some(Boolean);
    if (hasError) return;

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact-us" className="bg-[#fef6e9] py-10 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="block w-10 h-px bg-[#ac795a]" />
          <span className="text-[#ac795a] text-xs tracking-[0.3em] uppercase font-sans font-medium">
            Contact us
          </span>
          <span className="block w-10 h-px bg-[#ac795a]" />
        </div>

        <div className="flex flex-col items-center gap-5">
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#5c4032] leading-tight max-w-3xl">
            Let&apos;s{" "}
            <em className="italic text-[#ac795a]">
              shape something bespoke
            </em>
          </h2>

          <p className="max-w-2xl text-[#5c4032]/70 text-base sm:text-lg leading-relaxed font-sans">
            Share your room, your measurements, or just your idea. We&apos;ll help
            turn it into a mirror that feels designed for the moment.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-[#ac795a]/15 bg-[#f7efe4] shadow-[0_18px_50px_rgba(92,64,50,0.08)] p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <label className="flex flex-col gap-2">
              <span className="text-xs tracking-[0.22em] uppercase text-[#ac795a] font-sans">
                Name
              </span>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-[#ac795a]/15 bg-[#fef6e9] px-4 py-3 text-[#5c4032] outline-none transition-colors focus:border-[#ac795a] font-sans"
              />

              {/* ✅ reserved space */}
              <span className="text-sm text-[#8f6348] min-h-[20px]">
                {errors.name}
              </span>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs tracking-[0.22em] uppercase text-[#ac795a] font-sans">
                Email
              </span>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="you@example.com"
                className="rounded-2xl border border-[#ac795a]/15 bg-[#fef6e9] px-4 py-3 text-[#5c4032] outline-none transition-colors focus:border-[#ac795a] font-sans"
              />

              {/* ✅ reserved space */}
              <span className="text-sm text-[#8f6348] min-h-[20px]">
                {errors.email || emailError}
              </span>
            </label>
          </div>

          <label className="flex flex-col gap-2 mb-6">
            <span className="text-xs tracking-[0.22em] uppercase text-[#ac795a] font-sans">
              Message
            </span>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about the mirror, room, or feeling you want."
              className="rounded-2xl border border-[#ac795a]/15 bg-[#fef6e9] px-4 py-3 text-[#5c4032] outline-none transition-colors focus:border-[#ac795a] font-sans resize-none"
            />

            {/* ✅ reserved space */}
            <span className="text-sm text-[#8f6348] min-h-[20px]">
              {errors.message}
            </span>
          </label>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-[#5c4032]/60 font-sans text-center">
              We typically respond within 1-2 business days.
            </p>

            <button
              type="submit"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 bg-[#ac795a] hover:bg-[#8f6348] text-[#fef6e9] px-7 py-3.5 rounded-full tracking-widest uppercase text-xs transition-colors duration-300 font-sans"
            >
              Send inquiry
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {submitted && (
            <div className="mt-5 rounded-2xl border border-[#ac795a]/20 bg-[#fef6e9] px-4 py-3 text-[#5c4032] font-sans text-center">
              Thanks for reaching out. We&apos;ll be in touch soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}