import Footer from "@/pages/Footer";

// const Tasks = () => {
//   return (
//     <>
//       <div className="relative h-screen w-full flex flex-col items-center bg-purple-700 overflow-hidden bg-[url('https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/bg_roulette.png')] bg-cover bg-no-repeat bg-center">
//         <div className="absolute bottom-0 m-2">
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tasks;

// import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
// import { List } from "@telegram-apps/telegram-ui";
import { type FC } from "react";

// import { DisplayData } from "@/components/DisplayData/DisplayData.tsx";
import { Page } from "@/components/Page.tsx";

export const Tasks: FC = () => {
  // const lp = useMemo(() => retrieveLaunchParams(), []);
  return (
    <Page>
      <>
        <div className="relative h-screen w-full flex flex-col items-center bg-purple-700 overflow-hidden bg-[url('https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/bg_roulette.png')] bg-cover bg-no-repeat bg-center">
          <div className="absolute bottom-0 m-2">
            <Footer />
          </div>
        </div>
      </>
    </Page>
  );
};
