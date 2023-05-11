import { NavBar } from "components/navbar";
import styles from "../index.module.css";
import Image from "next/image";
import { type NextPage } from "next";
import okslLogo from "../../img/okslLogo.png";

const Events: NextPage = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <h1>Events Page</h1>
        <div className={styles.container}>
          <Image className={styles.image} src={okslLogo} alt="oksllogo" />
        </div>
      </main>
    </>
  );
};

export default Events;
