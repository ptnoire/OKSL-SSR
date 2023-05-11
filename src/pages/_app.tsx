import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>OKSL</title>
        <meta
          name="description"
          content="The Okanagan's #1 Source for Fighting Games!"
        />
        <meta
          name="keywords"
          content="Fighting Games, FGC (Fighting Game Community), Combo Systems, Character Rosters, Multiplayer Modes, Story Mode, Special Moves, Gameplay Mechanics, Competitive Play, Tournament Scene, Strategy Guides, Character Balance, Esports, Online Matches, Offline Matches, Training Mode, Frame Data, Hitboxes, Counterpicks, Tier Lists, DLC Characters, Fighting Game Genres, 2D Fighters, 3D Fighters, Anime Fighters, Arcade Fighters, Versus Fighters, Tag Team Fighters, Cross-Platform Play, Netcode, Fighting Game News, Upcoming Releases, Game Reviews, Fighting Game Industry, Fighting Game Tournaments, Fighting Game Championships, Cosplay, Fighting Game Merchandise, Fighting Game Community Events."
        ></meta>
        <link rel="icon" href="/okslbucks56.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
