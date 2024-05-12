import React, { useState } from "react";
import { FallingEffect } from "./components/FallingEffect";
import { GalleryContext } from "./context/galleryContext.jsx";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleGalleryPopup = () => {
    setIsOpen((prev) => !prev);
  };

  const GOOGLE_API = import.meta.env.VITE_GOOGLE_MAP_API;

  return (
    <div
      className={`flex items-center justify-center min-h-screen w-screen bg-[url('/bg_page.png')]`}
    >
      <GalleryContext.Provider
        value={{ isOpen, setIsOpen, handleGalleryPopup }}
      >
        {isOpen ? (
          <div
            className={`fixed top-0 left-0 ${isOpen ? "z-[35]" : "-z-[50]"} w-full h-full opacity-50 bg-black`}
            onClick={handleGalleryPopup}
          />
        ) : null}
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
      </GalleryContext.Provider>
    </div>
  );
}

export default App;
