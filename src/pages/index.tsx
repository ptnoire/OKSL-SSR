import { NavBar } from "components/navbar";
import styles from "./index.module.css";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}></main>
    </>
  );
};

export default Home;
