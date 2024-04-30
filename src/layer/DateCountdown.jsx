export const DateCountdown = () => {
  return (
    <div className="relative mt-[123px] flex flex-col items-center justify-center">
      <div className="bg-[url('./bg_greeting.png')] h-full w-full">
        <div>
          <p>2024년</p>
          <p>5월 26일</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center justify-between">
            <p>SUN</p>
            <p>MON</p>
            <p>TUE</p>
            <p>WED</p>
            <p>THU</p>
            <p>FRI</p>
            <p>SAT</p>
          </div>
        </div>
      </div>

      <div className="h-[7.5rem] w-full bg-[url('/bg_timer.png')] bg-contain bg-no-repeat">
        <div className="absolute left-0 top-14 flex w-full items-center justify-center gap-4">
          <div>
            <p className="text-center text-2xl">29</p>
            <p className="text-center text-xs">Days</p>
          </div>
          <p className="text-xl">:</p>
          <div>
            <p className="text-center text-2xl">13</p>
            <p className="text-center text-xs">Hours</p>
          </div>
          <p>:</p>
          <div>
            <p className="text-center text-2xl">54</p>
            <p className="text-center text-xs">Minutes</p>
          </div>
          <p>:</p>
          <div>
            <p className="text-center text-2xl">47</p>
            <p className="text-center text-xs">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
