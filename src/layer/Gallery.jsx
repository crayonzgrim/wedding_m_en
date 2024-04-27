import { useState } from "react";
import { Modal } from "../components/Modal";

export const Gallery = () => {
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (e) => {
    setIsOpen(true);
    setSrc(e.target.src);
    setAlt(e.target.id);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[120px]">
      <h3 className="text-md text-[#221815]">Gallery</h3>
      <div className="mb-[60px] mt-[27px] h-[1px] w-[10px] bg-[#221815]" />
      <div className="grid grid-cols-2 gap-2">
        {isOpen && (
          <Modal src={src} alt={alt} onClose={() => setIsOpen(false)} />
        )}

        <button onClick={handleModal}>
          <img id={"g_1"} src={"/g_1.jpeg"} alt={"g_1"} />
        </button>
        <button onClick={handleModal}>
          <img id={"g_2"} src={"/g_2.jpeg"} alt={"g_2"} />
        </button>
        <button onClick={handleModal}>
          <img id={"g_3"} src={"/g_3.jpeg"} alt={"g_3"} />
        </button>
        <button onClick={handleModal}>
          <img id={"g_4"} src={"/g_4.jpeg"} alt={"g_4"} />
        </button>
        <button onClick={handleModal}>
          <img id={"g_5"} src={"/g_5.jpeg"} alt={"g_5"} />
        </button>
        <button onClick={handleModal}>
          <img id={"g_7"} src={"/g_7.jpeg"} alt={"g_7"} />
        </button>
      </div>
    </div>
  );
};
