export const Main = () => {
  return (
    <div>
      <div className="mt-[100px] flex h-[2.5rem] w-full items-center justify-center bg-[url('/tile.png')] bg-center bg-no-repeat">
        <div className="flex items-center justify-between gap-[30.5px] text-xs font-lato text-[#FAA0A0]">
          <p>B</p>
          <p>L</p>
          <p>E</p>
          <p>S</p>
          <p>S</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 mt-10">
        <div>
          <p className="text-sm text-[#564E47] text-center font-cinzel">
            Groom
          </p>
          <p className="text-xl text-[#564E47] font-contrail">DONG IL KIM</p>
        </div>
        <img src={"./notice-heart.png"} alt={"heart"} width={18} />
        <div>
          <p className="text-sm text-[#564E47] text-center font-cinzel">
            Bride
          </p>
          <p className="text-xl text-[#564E47] font-contrail">
            KIANA MARIE ELLIOTT
          </p>
        </div>
      </div>

      <div className="mt-[60px]">
        <img src={"./pic_1.jpeg"} alt={"image"} />
      </div>

      <div className="mt-[70px] flex flex-col items-center justify-center font-crimson">
        <p>Sunday, September 8, 2024, 1:20 PM</p>
        <p className="text-sm">Interbulgo Exco Grand Ballroom Hall</p>
      </div>
    </div>
  );
};
