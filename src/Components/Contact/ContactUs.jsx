"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const faqItems = [
  {
    id: 1,
    question: "Do you make custom sizes?",
    answer:
      "Yes. If you share your measurements and reference images, we can suggest a size and shape that fits the room better.",
  },
  {
    id: 2,
    question: "How long does a custom inquiry take?",
    answer:
      "We usually reply within 1-2 business days with the next steps, availability, or a few styling directions.",
  },
  {
    id: 3,
    question: "Can I ask for styling advice only?",
    answer:
      "Absolutely. You can send us a room photo or a few notes, and we’ll help point you toward the right mirror and finish.",
  },
  {
    id: 4,
    question: "Do you ship outside your area?",
    answer:
      "If shipping is available for your region, we’ll let you know in our reply along with any timing or delivery details.",
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState(1);

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
            <em className="italic text-[#ac795a]">shape something bespoke</em>
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
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className="rounded-2xl border border-[#ac795a]/15 bg-[#fef6e9] px-4 py-3 text-[#5c4032] outline-none transition-colors focus:border-[#ac795a] font-sans"
              />

              <span className="text-sm text-[#8f6348] min-h-[20px]">
                {errors.name}
              </span>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs tracking-[0.22em] uppercase text-[#ac795a] font-sans">
                Email
              </span>

              <input
                id="contact-email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="rounded-2xl border border-[#ac795a]/15 bg-[#fef6e9] px-4 py-3 text-[#5c4032] outline-none transition-colors focus:border-[#ac795a] font-sans"
              />

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
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about the mirror, room, or feeling you want."
              className="rounded-2xl border border-[#ac795a]/15 bg-[#fef6e9] px-4 py-3 text-[#5c4032] outline-none transition-colors focus:border-[#ac795a] font-sans resize-none"
            />

            <span className="text-sm text-[#8f6348] min-h-[20px]">
              {errors.message}
            </span>
          </label>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-[#5c4032]/60 font-sans text-center">
              We typically respond within 1-2 business days.
            </p>

            <p className="text-xs sm:text-sm text-[#5c4032]/50 font-sans text-center max-w-md">
              Helpful details: room size, preferred style, finish, and any
              inspiration links you want to share.
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

        <div className="mt-10 rounded-[1.75rem]  border-[#ac795a]/15 bg-[#f7efe4] p-6 sm:p-8 shadow-[0_18px_50px_rgba(92,64,50,0.06)]">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
          <span className="block w-10 h-px bg-[#ac795a]" />
          <span className="text-[#ac795a] text-xs tracking-[0.3em] uppercase font-sans font-medium">
            FAQ
          </span>
          <span className="block w-10 h-px bg-[#ac795a]" />
        </div>
            <h3 className="mt-3 text-3xl md:text-4xl font-light text-[#5c4032]">
              A few quick answers before you 
              <span className="italic text-[#ac795a]"> a note.</span>
            </h3>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <Accordion
                key={item.id}
                open={openFaq === item.id}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`h-5 w-5 transition-transform duration-300 ${
                      openFaq === item.id ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 8l5 5 5-5"
                    />
                  </svg>
                }
                className="rounded-[1.4rem] border border-[#ac795a]/12 bg-[#fef6e9] px-4"
              >
                <AccordionHeader
                  onClick={() =>
                    setOpenFaq(openFaq === item.id ? 0 : item.id)
                  }
                  className="border-b-0 py-4 text-left text-base sm:text-lg font-light text-[#5c4032]"
                >
                  {item.question}
                </AccordionHeader>
                <AccordionBody className="pb-4 pt-0 text-sm sm:text-base leading-relaxed text-[#5c4032]/75 font-sans">
                  {item.answer}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
