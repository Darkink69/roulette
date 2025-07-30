import { useState, useEffect } from "react";

const TimerDays = () => {
  const [time, setTime] = useState({
    days: 59,
    hours: 24,
    minutes: 35,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.minutes > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          minutes: prevTime.minutes - 1,
        }));
      } else if (time.hours > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          hours: prevTime.hours - 1,
          minutes: 59,
        }));
      } else if (time.days > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          days: prevTime.days - 1,
          hours: 23,
          minutes: 59,
        }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <div className="w-full h-[100px] rounded-3xl backdrop-blur-md flex items-center justify-center">
        <p className="text-white text-2xl font-bold text-center px-4">
          <div className="relative flex items-center justify-center w-full h-28 rounded-3xl">
            <div className="flex items-center justify-center text-white text-7xl">
              <span className="flex flex-col items-center">
                {time.days}
                <span className="text-3xl">дней</span>
              </span>
              <span className="mx-2">:</span>
              <span className="flex flex-col items-center">
                {time.hours}
                <span className="text-3xl">часа</span>
              </span>
              <span className="mx-2">:</span>
              <span className="flex flex-col items-center">
                {time.minutes}
                <span className="text-3xl">мин</span>
              </span>
            </div>
          </div>
        </p>
      </div>
    </>
  );
};

export default TimerDays;
