import Footer from "../Footer";
import { Page } from "@/components/Page.tsx";
// import { type FC } from "react";
import StartTasksItem from "./StartTasksItem";

export const Tasks = () => {
  const urlImg =
    "https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/";

  const dataStartTasks = [
    {
      img: urlImg + "task_user.png",
      alt: "task_user",
      taskText: "Пригласить 1 друга",
      taskCoins: "50.000",
      complete: false,
      take: false,
    },
    {
      img: urlImg + "task_tg.png",
      alt: "task_tg",
      taskText: "Подписаться на офф. телеграмм проекта",
      taskCoins: "50.000",
      complete: true,
      take: true,
    },
    {
      img: urlImg + "task_roll.png",
      alt: "task_roll",
      taskText: "Крутить рулетку 1 раз",
      taskCoins: "50.000",
      complete: false,
      take: false,
    },
  ];

  const item = Array.from({ length: dataStartTasks.length }, (_, index) => (
    <StartTasksItem key={index} dataStartTasks={dataStartTasks[index]} />
  ));
  return (
    <Page>
      <>
        <div className="relative h-screen w-full flex flex-col items-center overflow-hidden bg-[url('https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/bg_roulette2.png')] bg-cover bg-no-repeat bg-center">
          <div className="text-2xl text-white opacity-40 days m-4">
            Стартовые задания:
          </div>
          {item}

          <div className="text-2xl text-white opacity-40 days m-4 pt-3">
            Общие задания:
          </div>
          {/* <StartTasksItem /> */}

          <div className="absolute bottom-0 m-2">
            <Footer />
          </div>
        </div>
      </>
    </Page>
  );
};

export default Tasks;
