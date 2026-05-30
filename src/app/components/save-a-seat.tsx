export function SaveASeat() {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="save-a-seat" className="py-24 px-6" style={{ background: "#faf6ee" }}>
      <div className="max-w-[720px] mx-auto text-center">
        <p
          style={{ fontFamily: "Kalam, cursive", color: "#a04e33" }}
          className="text-[22px] mb-4"
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
          className="text-[clamp(36px,5vw,52px)] font-normal mb-6"
        >
          How to reserve a seat
        </h2>

        <div
          style={{ fontFamily: "Newsreader, serif", color: "#574638", lineHeight: "1.75" }}
          className="text-[18px] space-y-5 mb-10"
        >
          <p>
            RSVP opens monthly via email to our mailing list. Each dinner is
            unique — with details about the menu, date, and theme sent directly
            to subscribers when seats become available. The full RSVP asks for
            dietary notes, guest count, and anything helpful to know before you
            come over.
          </p>

          <p>
            Dinners are limited to eight guests, so spots fill quickly. Join
            the list below to be the first to know when the next dinner is
            announced. The apartment address is shared after a seat is
            confirmed, not on the public site.
          </p>

          <p>
            If the table is full, you'll stay on the list for the next opening.
            No pressure, no spam, just a monthly note when there is something
            to gather around.
          </p>
        </div>

        <button
          onClick={scrollToHero}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[17px] transition-all hover:scale-105 hover:shadow-lg"
          style={{
            fontFamily: "Newsreader, serif",
            background: "#2a1f16",
            color: "#f4eee2",
          }}
        >
          Join the email list →
        </button>

        <p
          style={{
            fontFamily: "Newsreader, serif",
            color: "#8c7b6b",
            fontStyle: "italic",
          }}
          className="text-[15px] mt-8"
        >
          If you've joined us before, welcome back. You're already on the list.
        </p>
      </div>
    </section>
  );
}
