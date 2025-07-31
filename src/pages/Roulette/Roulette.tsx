import Footer from "../Footer";
import { Page } from "@/components/Page.tsx";
import { type FC } from "react";

export const Roulette: FC = () => {
  return (
    <Page>
      <>
        <div className="relative h-screen w-full flex flex-col items-center bg-purple-700 overflow-hidden bg-[url('https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/bg_roulette.png')] bg-cover bg-no-repeat bg-center">
          <div>Roulette</div>
          <div className="m-2">
            <img
              src="https://s3.twcstorage.ru/c6bae09a-a5938890-9b68-453c-9c54-76c439a70d3e/Roulette/roulette_spin.png"
              alt="bank"
            />
          </div>
          <div className="absolute bottom-0 m-2">
            <Footer />
          </div>
        </div>
      </>
    </Page>
  );
};

export default Roulette;
