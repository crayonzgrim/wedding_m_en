export const HowToCome = () => {
  return (
    <div className="mt-[120px] flex flex-col items-center justify-center">
      <h3 className="text-md text-[#221815] font-nothing">Wedding Hall</h3>
      <div className="mb-[60px] mt-[27px] h-[1px] w-[10px] bg-[#221815]" />

      <div className="flex flex-col items-center justify-center font-crimson">
        <p className="font-semibold">Grand Ballroom Hall</p>
        <p>Daegu Exco Interbulgo</p>
        <p>80, Distribution Complex-ro, Buk-gu, Daegu</p>
      </div>

      {/* <div className="mb-[45px] mt-[35px] rounded-full border-2 border-[#F5B091] bg-white px-5 py-1"> */}
      {/*   <a href={"sms: 01096570770"} className="font-semibold text-[#f5b091]"> */}
      {/*     Message to Kiana */}
      {/*   </a> */}
      {/* </div> */}

      <div className="mt-[35px]">
        <img src={"./map.jpeg"} alt={"map"} />
      </div>
    </div>
  );
};
