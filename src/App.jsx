import { FallingEffect } from "./components/FallingEffect";
import {
  Events,
  Extra,
  Footer,
  Gallery,
  HowToCome,
  Invitation,
  Main,
  Parents,
} from "./layer";

function App() {
  const GOOGLE_API = import.meta.env.VITE_GOOGLE_MAP_API;

  return (
    <div
      className={`flex items-center justify-center min-h-screen w-screen bg-[url('/bg_page.png')]`}
    >
      <FallingEffect />
      <div className="min-h-screen w-[382px] bg-[url('/bg_page.png')]">
        <Main />
        <Invitation />
        <Parents />
        <Gallery />
        <div id={"googleMap"} className="relative h-[400px]">
          <HowToCome GOOGLE_API={GOOGLE_API} />
        </div>
        <Extra />
        <Events />
        <Footer />
      </div>
    </div>
  );
}

export default App;
