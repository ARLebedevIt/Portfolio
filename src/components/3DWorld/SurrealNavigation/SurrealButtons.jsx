import React, { useEffect, useMemo, useRef } from "react";
import annotations from "../ThreeData/anotations.json";
import { gsap } from "gsap";
import infoImg from "../../../assets/image/infoSurreal.png";
import SurrealModal from "./SurrealModal";
import useSound from "use-sound";
import hoverSound from "../../../assets/sound/hoverSound.wav";
import SoundWidget from "../../2DWorld/SoundWidget/SoundWidget";
import "./SurrealNav.scss";
import { useTranslation } from "react-i18next";
import { Portal } from "../../Common/Portal/Portal";
import { useMediaQueries } from "../../../hooks/useMediaQuery";

const SurrealButtons = React.memo(
  ({ toSection, openSurreal, setInfoVisible, infoVisible }) => {
    const [playHover] = useSound(hoverSound, { volume: 0.05 });
    const { size650 } = useMediaQueries()
    const buttonsRef = useRef(null);
    const {
      t,
      i18n: { language },
    } = useTranslation("global");
    useEffect(() => {
      if (openSurreal) {
        gsap.timeline().to(buttonsRef.current, {
          delay: 10.3,
          duration: 0.5,
          opacity: 1,
        });
      }
    }, [openSurreal]);

    const data = useMemo(() => {
      return annotations.map((item, idx) => {
        return (
          <button
            onMouseEnter={playHover}
            key={idx}
            className="surreal__nav_button"
            onClick={() => toSection(idx)}
          >
            {item.title && t(`SurrealButtons.${item.title}`)}
          </button>
        );
      });
    }, [playHover, toSection]);

    return (
      <div
        ref={buttonsRef}
        className={`surreal__nav_buttons ${"btn_" + language}`}>
        {data}
        <button
          onClick={() => setInfoVisible((value) => !value)}
          className="surreal__info_button">
          <img src={infoImg} alt="Not Found" />
        </button>
        {!size650 && (
          <SoundWidget
            className={"surrealSoundWidget"}
            openSurreal={openSurreal}
          />
        )}
        <Portal>
          <SurrealModal lazy infoVisible={infoVisible} />
        </Portal>
      </div>
    );
  }
);

export default SurrealButtons;
