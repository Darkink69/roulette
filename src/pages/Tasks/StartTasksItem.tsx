// import { Link } from "@/components/Link/Link.tsx";

const StartTasksItem = ({ dataStartTasks }: any) => {
  return (
    <>
      <div className="relative w-[95%] h-[120px] rounded-[20px] border-2 border-gray-100 overflow-hidden mb-2">
        <div className="absolute -bottom-7 -left-7 w-[100px]">
          <img
            src={dataStartTasks.img}
            alt={dataStartTasks.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-4 left-[5%] grid grid-cols-[13fr_7fr] gap-4 w-11/12">
          <div className="flex flex-col items-end justify-center text-white">
            <p className="days text-lg">{dataStartTasks.taskText}</p>
          </div>

          <div className="flex items-end justify-center">
            <img
              className="w-6 mr-1"
              src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/FCNT_logo.png"
              alt="FCNT"
            />
            <p className="bg-linear-to-r from-[#FFE561] to-[#FF8827] bg-clip-text text-transparent text-xl days">
              {dataStartTasks.taskCoins}
            </p>
          </div>

          <div className="flex flex-col items-end justify-center">
            {dataStartTasks.complete ? (
              <div className="flex items-center text-[#7AFF8E] text-base nunito-sans-400">
                Выполнено{" "}
                <span className="ml-1">
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                    <path
                      d="M14.4793 0.459979C14.7776 0.172557 15.2524 0.181288 15.5399 0.47951C15.8273 0.777753 15.8185 1.25262 15.5203 1.54006L6.18146 10.5401C5.89093 10.8201 5.4309 10.82 5.14044 10.5401L0.479312 6.04006C0.18146 5.7525 0.172522 5.27754 0.459781 4.97951C0.747334 4.68166 1.2223 4.67272 1.52033 4.95998L5.66095 8.95705L14.4793 0.459979Z"
                      fill="#7AFF8E"
                    />
                  </svg>
                </span>
              </div>
            ) : (
              <p className="text-white text-base nunito-sans-400">Выполнить</p>
            )}
          </div>

          <div className="flex  justify-center">
            <p
              className={
                dataStartTasks.take
                  ? "text-white text-base nunito-sans-400"
                  : "text-white text-base nunito-sans-400 opacity-30"
              }
            >
              Забрать
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartTasksItem;
