import { Cell, Image } from "@telegram-apps/telegram-ui";
// import { Cell } from "@telegram-apps/telegram-ui";

import { Link } from "@/components/Link/Link.tsx";
// import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
import { Page } from "@/components/Page.tsx";

import tonSvg from "./ton.svg";

import Main from "@/pages/MainPage/Main";
import Tasks from "@/pages/Tasks/Tasks";
import Roulette from "@/pages/Roulette/Roulette";
import Reff from "@/pages/Reff/Reff";

import { type FC } from "react";
import {
  initDataRaw as _initDataRaw,
  initDataState as _initDataState,
  // type User,
  useSignal,
} from "@telegram-apps/sdk-react";

// import { List, Placeholder } from "@telegram-apps/telegram-ui";

// import {
//   DisplayData,
//   type DisplayDataRow,
// } from "@/components/DisplayData/DisplayData.tsx";

// function getUserRows(user: User): DisplayDataRow[] {
//   return Object.entries(user).map(([title, value]) => ({ title, value }));
// }
// import { useState, useEffect } from 'react';
// import Websocket from "@/components/websocket";

export const IndexPage: FC = observer(() => {
  const initDataRaw = useSignal(_initDataRaw);
  const initDataState = useSignal(_initDataState);
  console.log(initDataRaw);
  // console.log(initDataState?.user);
  store.setUser(initDataState?.user);
  // const tg = window.Telegram.WebApp;
  // console.log(tg, 'tg!')
  // useEffect(() => {
  //   fetch(
  //     `https://toncenter.com/api/v2/getAddressBalance?address=UQDncYGSo8oA2jQVZwolIiTdylIE4QAeNtrpkmwW9sYjX0bB`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => store.setTons(data.result))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <Page back={false}>
      <div className="bg-gray-800 min-h-screen flex items-center justify-center">
        <Main />
      </div>

      {/* <Websocket /> */}
      <Link to="/ton-connect">
        <Cell
          before={<Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />}
          subtitle="Connect your TON wallet"
        >
          TON Connect
        </Cell>
      </Link>
      {/* <LocationComponent /> */}

      <Link to="/tasks">
        <Tasks />
      </Link>
      <Link to="/roulette">
        <Roulette />
      </Link>
      <Link to="/reff">
        <Reff />
      </Link>
      {/* <List>
        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link to="/ton-connect">
            <Cell
              before={
                <Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />
              }
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link to="/init-data">
            <Cell subtitle="User data, chat information, technical data">
              Init Data
            </Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">
              Launch Parameters
            </Cell>
          </Link>
          <Link to="/theme-params">
            <Cell subtitle="Telegram application palette information">
              Theme Parameters
            </Cell>
          </Link>
        </Section>
      </List> */}
    </Page>
  );
});
