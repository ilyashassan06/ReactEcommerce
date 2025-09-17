import React, { useEffect, useState } from "react";
import Bannerr from "../assets/Banner.png";

function Banner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer); // stop countdown at 0
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex flex-col md:flex-row md:justify-evenly items-center justify-evenly px-6 md:px-16 py-3 md:py-20 
      bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0">
        <div className="w-96 h-96 bg-green-500/20 rounded-full blur-3xl absolute -top-20 -left-20"></div>
        <div className="w-96 h-96 bg-purple-500/20 rounded-full blur-3xl absolute bottom-0 right-0"></div>
      </div>

      {/* Left Side Content */}
      <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-6 relative z-10">
        <p className="text-green-500 text-2xl font-semibold">Categories</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Enhance Your <br /> Music Experience
        </h1>

        {/* Countdown Timer */}
        <div className="flex space-x-4">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center"
            >
              <span className="text-lg font-bold">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-green-500/40">
          Buy Now!
        </button>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 hidden md:flex justify-center relative z-10">
        <img
          src={Bannerr}
          alt="Speaker"
          className="max-w-full md:max-w-md object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
        />
      </div>
    </div>
  );
}

export default Banner;
