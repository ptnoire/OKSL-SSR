import { NavBar } from "components/navbar";
import styles from "./index.module.css";
import Image from "next/image";
import { type NextPage } from "next";
import okslLogo from "../img/okslLogo.png";
import { Timeline } from "react-twitter-widgets";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.contentArea}>
          <div className={styles.container}>
            <Image className={styles.image} src={okslLogo} alt="oksllogo" />
          </div>
        </div>
        <div className={styles.socialsDisplay}>
          <iframe
            src="https://discord.com/widget?id=534427664199450635&theme=dark"
            width="350"
            height="350"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
          <Timeline
            renderError={(_err) => <p>Failed to load timeline..</p>}
            dataSource={{
              sourceType: "profile",
              screenName: "SmashOkanagan",
            }}
            options={{
              height: "600",
              theme: "dark",
              borderColor: "#f5f5dc",
            }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
