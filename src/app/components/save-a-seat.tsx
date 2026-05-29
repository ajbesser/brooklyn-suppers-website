import { useState } from "react";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        style={{ fontFamily: "Newsreader, serif", color: "#2a1f16" }}
        className="text-[15px]"
      >
        {label}
        {required && (
          <span style={{ color: "#a04e33" }} className="ml-1">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  fontFamily: "Newsreader, serif",
  background: "rgba(235,226,208,0.45)",
  border: "1px solid rgba(42,31,22,0.15)",
  borderRadius: "6px",
  color: "#2a1f16",
  fontSize: "16px",
  padding: "12px 16px",
  outline: "none",
  width: "100%",
};

export function SaveASeat() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    dietary: "",
    note: "",
    returning: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="save-a-seat" className="py-24 px-6" style={{ background: "#faf6ee" }}>
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="md:sticky md:top-24">
            <p
              style={{ fontFamily: "Kalam, cursive", color: "#a04e33" }}
              className="text-[22px] mb-4 -ml-0.5"
            >
              come over
            </p>

            <h2
              style={{
                fontFamily: "Newsreader, serif",
                color: "#2a1f16",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
              className="text-[clamp(36px,4.5vw,48px)] font-normal mb-6"
            >
              Save me a seat.
            </h2>

            <div
              style={{ fontFamily: "Newsreader, serif", color: "#574638", lineHeight: "1.75" }}
              className="text-[18px] space-y-3 mb-6"
            >
              <p>
                Leave your details below and I'll write back when the next
                dinner is set. Seats are limited to eight, so I read every note
                personally before sending an invite.
              </p>
            </div>

            <p
              style={{
                fontFamily: "Newsreader, serif",
                color: "#8c7b6b",
                fontStyle: "italic",
              }}
              className="text-[16px]"
            >
              If we've cooked for you before, welcome back.
            </p>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div
                className="rounded-[3px] p-10"
                style={{ background: "rgba(235,226,208,0.5)", border: "1px solid rgba(42,31,22,0.1)" }}
              >
                <p
                  style={{ fontFamily: "Kalam, cursive", color: "#a04e33" }}
                  className="text-[26px] mb-3"
                >
                  got it —
                </p>
                <p
                  style={{ fontFamily: "Newsreader, serif", color: "#574638", lineHeight: "1.7" }}
                  className="text-[18px]"
                >
                  Thanks, {form.name.split(" ")[0]}. I'll be in touch when the
                  next dinner is set. Looking forward to cooking for you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Field label="What should I call you?" required>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                    required
                    style={inputStyle}
                  />
                </Field>

                <Field label="Phone (so I can text you the address)" required>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="555 555 5555"
                    required
                    style={inputStyle}
                  />
                </Field>

                <Field label="Anything you can't eat?">
                  <input
                    type="text"
                    value={form.dietary}
                    onChange={(e) => update("dietary", e.target.value)}
                    placeholder="Allergies, vegetarian, etc — or just say 'no'"
                    style={inputStyle}
                  />
                </Field>

                <Field label="Anything else you'd like to share?">
                  <textarea
                    value={form.note}
                    onChange={(e) => update("note", e.target.value)}
                    placeholder="A favorite ingredient, how you heard about us, a special occasion, or just say hi."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </Field>

                <label
                  className="flex gap-3 items-center cursor-pointer"
                  style={{ fontFamily: "Newsreader, serif", color: "#574638" }}
                >
                  <input
                    type="checkbox"
                    checked={form.returning}
                    onChange={(e) => update("returning", e.target.checked)}
                    className="w-4 h-4 rounded-[3px] cursor-pointer"
                    style={{ accentColor: "#2a1f16" }}
                  />
                  <span className="text-[16px]">I've been to a supper before.</span>
                </label>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full text-[17px] transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: "Newsreader, serif",
                    background: "#2a1f16",
                    color: "#f4eee2",
                  }}
                >
                  Send it over →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
