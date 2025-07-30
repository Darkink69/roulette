// import React from 'react';

import Footer from "../Footer";
import TimerDays from "./Timer";
// import Prize10 from "./Prize10";

const Main = () => {
  return (
    <>
      <div className="relative h-screen w-full flex flex-col items-center bg-purple-700 overflow-hidden bg-[url('https://qwv2fugbunumyex7.public.blob.vercel-storage.com/bg_roulette.png')] bg-cover bg-no-repeat bg-center">
        <div className="mt-8">
          <TimerDays />
        </div>

        <div className="flex items-baseline sm:scale-100 scale-50">
          <img
            className="pr-8"
            src="https://qwv2fugbunumyex7.public.blob.vercel-storage.com/10_000.png"
            alt="10000"
          />
          <img
            src="https://qwv2fugbunumyex7.public.blob.vercel-storage.com/TON_logo.png"
            alt="TON"
          />
        </div>

        <div className="m-2">
          <img
            src="https://qwv2fugbunumyex7.public.blob.vercel-storage.com/bank.png"
            alt="bank"
          />
        </div>
        <div className="absolute bottom-[15%] w-[80%] h-[100px] border-2 border-gray-200 rounded-3xl backdrop-blur-md flex items-center justify-center">
          <div className="flex flex-col items-end justify-center -top-10">
            <div className="flex items-center text-white text-2xl font-bold">
              <img
                className="scale-[75%]"
                src="https://qwv2fugbunumyex7.public.blob.vercel-storage.com/FCNT_logo.png"
                alt="FCNT"
              />
              <div>394</div>
            </div>
            <div className="flex items-center text-white text-2xl font-bold">
              <img
                className="scale-[30%]"
                src="https://qwv2fugbunumyex7.public.blob.vercel-storage.com/TON_logo.png"
                alt="TON"
              />
              <div>0</div>
            </div>
          </div>

          <div className="ml-8 text-white text-2xl">Получить</div>
        </div>

        <div className="absolute bottom-0 m-2">
          <Footer />
        </div>
        {/* <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">
        Hello world
      </p> */}
      </div>
    </>
  );
};

export default Main;
