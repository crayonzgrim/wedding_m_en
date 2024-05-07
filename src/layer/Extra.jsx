import { Countdown } from "../components/Countdown";

export const Extra = () => {
  return (
    <div>
      <div className="relative mt-[120px] flex h-[292px] flex-col items-center justify-center bg-[url('/bg_quote.png')]">
        <div>
          <img src={"/flower.png"} alt={"flower"} width={30} />
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 font-nothing">
          <p>I love you for all that you are,</p>
          <p>All that you have been</p>
          <p>And all that you will be.</p>
        </div>
      </div>

      <div>
        <Countdown />
      </div>
    </div>
  );
};
