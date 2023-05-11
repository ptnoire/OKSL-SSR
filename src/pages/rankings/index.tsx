import { NavBar } from "components/navbar";
import styles from "../index.module.css";
import Image from "next/image";
import { type NextPage } from "next";
import okslLogo from "../../img/okslLogo.png";

const Rankings: NextPage = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <h1>Rankings Page</h1>
        <div className={styles.container}>
          <Image className={styles.image} src={okslLogo} alt="oksllogo" />
        </div>
      </main>
    </>
  );
};

export default Rankings;
