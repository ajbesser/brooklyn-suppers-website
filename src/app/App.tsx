import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { WhatToExpect } from "./components/what-to-expect";
import { Menus } from "./components/menus";
import { SaveASeat } from "./components/save-a-seat";
import { Footer } from "./components/footer";

export default function App() {
  return (
    // MARKER-MAKE-KIT-INVOKED
    <div className="min-h-screen" style={{ background: "#faf6ee" }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhatToExpect />
        <Menus />
        <SaveASeat />
      </main>
      <Footer />
    </div>
  );
}
