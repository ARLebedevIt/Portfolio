import React, { useEffect, useState } from "react";
import "./Header.scss";
import MenuBurger from "../MenuBurger/MenuBurger";
import useSound from "use-sound";
import hoverSound from "../../../assets/sound/hoverSound.wav";
import scrollSound from "../../../assets/sound/scrollSound.mp3";
import SoundWidget from "../SoundWidget/SoundWidget";
import { useScrollHider } from "../../../hooks/useScrollHider";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { useHeaderLinks } from "../../../hooks/useHeaderLinks";
import logoImage from "../../../assets/image/clockHeader.png";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useMediaQueries } from "../../../hooks/useMediaQuery";

const Header = React.memo(({ apploaded }) => {
  gsap.registerPlugin(ScrollToPlugin);
  const { size1025, size650 } = useMediaQueries()
  const [playHoverSound] = useSound(hoverSound, { volume: 0.03 });
  const [playScrollSound] = useSound(scrollSound, { volume: 0.6 });
  const [menuOpen, setMenu] = useState(false);
  const { showHeader } = useScrollHider(menuOpen);
  const { t } = useTranslation("global");
  const headerItems = useHeaderLinks();
  const navigateToTop = () =>
  gsap.to(window, {
    duration: 2,
    autoKill: false,
    scrollTo: { y: "#mainPageContent", offsetY: 70 },
  });
  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const data = useMemo(() => {
    return headerItems.map((item) => {
      return (
        <li
          onMouseEnter={playHoverSound}
          key={item.name}
          onClick={() => {
            setMenu(false);
            item.anchor();
            playScrollSound();
          }}
          className="header__link"
        >
          {t(item.name)}
        </li>
      );
    });
  }, [playHoverSound, playScrollSound]);

  return (
    <header className={`header__wrapper ${!showHeader && "headerHide"}`}>
      <div className={menuOpen ? "header__content_active" : "header__content"}>
        <nav className={menuOpen ? "header__menu_active" : "header__menu"}>
        <img
          onClick={() => {
            setMenu(false);
            navigateToTop();
            playScrollSound();
          }}
          className={`header__logo ${menuOpen && "logo_active"}`}
          src={logoImage}
          alt="Not Found"
        />
          <ul className={menuOpen ? "header__list_active" : "header__list"}>
            {data}
          </ul>
          <MenuBurger openMenu={setMenu} menuOpen={menuOpen} />
        </nav>

        { size1025 && !size650 && (
          <SoundWidget
            apploaded={apploaded}
            className={"soundWidgetHeader"}
            menuOpen={menuOpen}
          />
        )}
      </div>
    </header>
  );
});

export default Header;
