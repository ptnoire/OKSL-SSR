import styles from "./component-styles/navbar.module.css";
import youtube from "../src/img/youtube.svg";
import discord from "../src/img/discord.svg";
import twitch from "../src/img/twitch.svg";
import okslLogo from "../src/img/okslLogo.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function NavBar() {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (anchorRef.current) {
      anchorRef.current.setAttribute("rel", "noopener noreferrer");
    }
  }, []);

  return (
    <div className={styles.nav_bar}>
      <Image className={styles.logo} src={okslLogo} alt="logo" />
      <a
        className={styles.icons}
        referrerPolicy="no-referrer"
        href="https://www.youtube.com/channel/UCvlCJTZo-k6peOxQTvxgnVw"
        target="_blank"
        ref={anchorRef}
      >
        <Image src={youtube} width={45} height={45} alt="youtube" />
      </a>

      <a
        className={styles.icons}
        referrerPolicy="no-referrer"
        href="https://www.youtube.com/channel/UCvlCJTZo-k6peOxQTvxgnVw"
        target="_blank"
        ref={anchorRef}
      >
        <Image src={discord} width={45} height={45} alt="discord" />
      </a>

      <a
        className={styles.icons}
        referrerPolicy="no-referrer"
        href="https://www.youtube.com/channel/UCvlCJTZo-k6peOxQTvxgnVw"
        target="_blank"
        ref={anchorRef}
      >
        <Image src={twitch} width={45} height={45} alt="twitch" />
      </a>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faChevronDown} className={styles.faIcon} />
      </button>
    </div>
  );
}
