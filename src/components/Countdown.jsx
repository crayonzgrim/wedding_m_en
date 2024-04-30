import { useEffect, useMemo, useState } from "react";

export const Countdown = () => {
  const countdownDate = useMemo(() => {
    return new Date("2024-09-08T14:10:00");
  }, []);

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const remainingTimeObj = calculateRemainingTime(countdownDate, now);
      setRemainingTime(remainingTimeObj);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownDate]);

  const calculateRemainingTime = (endDate, now) => {
    const difference = endDate.getTime() - now.getTime();
    if (difference <= 0) {
      // handle expired or invalid date
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="h-[7.5rem] w-full bg-[url('/bg_timer.png')] bg-contain bg-no-repeat">
        <div className="absolute left-0 top-9 flex w-full items-center justify-center gap-4">
          <div>
            <p className="text-center text-2xl">{remainingTime.days}</p>
            <p className="text-center text-xs">Days</p>
          </div>
          <p className="text-xl">:</p>
          <div>
            <p className="text-center text-2xl">{remainingTime.hours}</p>
            <p className="text-center text-xs">Hours</p>
          </div>
          <p>:</p>
          <div>
            <p className="text-center text-2xl">{remainingTime.minutes}</p>
            <p className="text-center text-xs">Minutes</p>
          </div>
          <p>:</p>
          <div>
            <p className="text-center text-2xl">{remainingTime.seconds}</p>
            <p className="text-center text-xs">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
