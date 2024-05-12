import { useContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { GalleryContext } from "../context/galleryContext";

export const Gallery = () => {
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

  const { isOpen, setIsOpen } = useContext(GalleryContext);

  console.log(isOpen);

  const handleModal = (e) => {
    setIsOpen(true);
    setSrc(e.target.src);
    setAlt(e.target.id);
  };

  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-[120px]">
      <h3 className="text-md text-[#221815] font-nothing">Gallery</h3>
      <div className="mb-[60px] mt-[27px] h-[1px] w-[10px] bg-[#221815]" />
      <div className="grid grid-cols-2 gap-2">
        {isOpen ? (
          <Modal src={src} alt={alt} onClose={() => setIsOpen(false)} />
        ) : null}

        <button onClick={handleModal} className="focus-visible:outline-0">
          <img
            id={"g_1"}
            src={"/g_1.jpeg"}
            alt={"g_1"}
            className="focus-visible:outline-0"
          />
        </button>
        <button onClick={handleModal} className="focus-visible:outline-0">
          <img
            id={"g_2"}
            src={"/g_2.jpeg"}
            alt={"g_2"}
            className="focus-visible:outline-0"
          />
        </button>
        <button onClick={handleModal} className="focus-visible:outline-0">
          <img
            id={"g_3"}
            src={"/g_3.jpeg"}
            alt={"g_3"}
            className="focus-visible:outline-0"
          />
        </button>
        <button onClick={handleModal} className="focus-visible:outline-0">
          <img
            id={"g_4"}
            src={"/g_4.jpeg"}
            alt={"g_4"}
            className="focus-visible:outline-0"
          />
        </button>
        <button onClick={handleModal} className="focus-visible:outline-0">
          <img
            id={"g_5"}
            src={"/g_5.jpeg"}
            alt={"g_5"}
            className="focus-visible:outline-0"
          />
        </button>
        <button onClick={handleModal} className="focus-visible:outline-0">
          <img
            id={"g_6"}
            src={"/g_6.jpeg"}
            alt={"g_6"}
            className="focus-visible:outline-0"
          />
        </button>
      </div>
    </div>
  );
};
