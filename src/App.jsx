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
        <HowToCome />
        <Extra />
        <Events />
        <Footer />
      </div>
    </div>
  );
}

export default App;
