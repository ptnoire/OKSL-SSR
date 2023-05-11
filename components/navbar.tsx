import styles from "./component-styles/navbar.module.css";
import youtube from "../src/img/ytRe2.png";
import discord from "../src/img/discordRe3.png";
import twitch from "../src/img/twitchRe2.png";
import okslLogo from "../src/img/okslLogo.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function NavBar() {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (anchorRef.current) {
      anchorRef.current.setAttribute("rel", "noopener noreferrer");
    }
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.nav_bar}>
      <Link href="/">
        <Image className={styles.logo} src={okslLogo} alt="logo" />
      </Link>
      <a
        className={styles.icons}
        referrerPolicy="no-referrer"
        href="https://www.youtube.com/channel/UCvlCJTZo-k6peOxQTvxgnVw"
        target="_blank"
        ref={anchorRef}
      >
        <Image src={youtube} alt="youtube" />
      </a>

      <a
        className={styles.icons}
        referrerPolicy="no-referrer"
        href="https://discord.gg/ut3dXfY"
        target="_blank"
        ref={anchorRef}
      >
        <Image src={discord} alt="discord" />
      </a>

      <a
        className={styles.icons}
        referrerPolicy="no-referrer"
        href="https://www.twitch.tv/okanagansmashleague"
        target="_blank"
        ref={anchorRef}
      >
        <Image src={twitch} alt="twitch" />
      </a>
      <button className={styles.button} onClick={() => setShowMenu(!showMenu)}>
        {!showMenu && (
          <FontAwesomeIcon icon={faChevronDown} className={styles.faIcon} />
        )}
        {!!showMenu && (
          <FontAwesomeIcon icon={faChevronUp} className={styles.faIcon} />
        )}
      </button>
      {!!showMenu && (
        <div className={styles.dropMenu}>
          <Link href="/rankings">
            <h2>Rankings</h2>
          </Link>
          <Link href="/events">
            <h2>Events</h2>
          </Link>
          <Link href="/brackets">
            <h2>Brackets</h2>
          </Link>
          <Link href="/contact">
            <h2>Contact</h2>
          </Link>
        </div>
      )}
    </div>
  );
}
