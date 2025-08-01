import Footer from "../Footer";
import TimerDays from "./Timer";
import { observer } from "mobx-react-lite";
import { type FC } from "react";
import store from "../../store/store";

const Main: FC = observer(() => {
  return (
    <>
      <div className="relative h-screen w-full flex flex-col items-center bg-purple-700 overflow-hidden bg-[url('https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/bg_roulette.png')] bg-cover bg-no-repeat bg-center">
        <div className="mt-8 mb-4 sm:scale-100 scale-75">
          <TimerDays />
        </div>

        <div className="flex items-baseline sm:scale-100 scale-50">
          <img
            className="pr-8"
            src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/10_000.png"
            alt="10000"
          />
          <img
            src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/TON_logo.png"
            alt="TON"
          />
        </div>

        <div className="m-2">
          <img
            src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/bank.png"
            alt="bank"
          />
        </div>
        {/* bg gradient */}
        <div className="absolute bottom-[15%] sm:w-[40%] w-[70%] h-[100px] bg-gradient-to-b from-[#ffffff] to-[#dbdbdb] opacity-20 rounded-3xl flex items-center justify-center"></div>

        <div className="absolute bottom-[15%] sm:w-[40%] w-[70%] h-[100px] rounded-3xl backdrop-blur-md flex items-center justify-center">
          <div className="flex flex-col items-end justify-center">
            <div className="flex items-center text-white text-2xl font-bold days">
              <img
                className="scale-[75%]"
                src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/FCNT_logo.png"
                alt="FCNT"
              />
              <div className="ml-1 bg-linear-to-r from-[#FFE561] to-[#FF8827] bg-clip-text text-transparent">
                {store.coins}
              </div>
            </div>
            <div className="flex items-center text-white text-2xl font-bold days">
              <img
                className="scale-[90%]"
                src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/TON_logo_min.png"
                alt="TON"
              />
              <div className="ml-1 bg-linear-to-r from-[#5DE1FF] to-[#009EFF] bg-clip-text text-transparent">
                {store.tonBalance}
              </div>
            </div>
          </div>

          <div className="ml-8 text-white text-2xl nunito-sans-400">
            получить
          </div>
        </div>

        {/* border */}
        <div className="absolute bottom-[15%] sm:w-[40%] w-[70%] h-[100px] border-2 border-gray-200 opacity-50 rounded-3xl flex items-center justify-center"></div>

        <div className="absolute bottom-0 m-2">
          <Footer />
        </div>
      </div>
    </>
  );
});

export default Main;
