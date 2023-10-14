import React, { useLayoutEffect, useRef } from "react";
import photoAboutMe from "../../../assets/image/aboutImg.png";
import photoAboutMeWebp from "../../../assets/image/aboutImg.webp";
import "./AboutMe.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import astranautVideo from "../../../assets/video/astranautVideo.mp4";
import glowVideo from "../../../assets/video/glowVideo.mp4";
import { useTranslation } from "react-i18next";
import TextWrapper from "../../Common/TextWrapper/TextWrapper";

const AboutMe = React.memo(() => {
  const {
    t,
    i18n: { language },
  } = useTranslation("global");
  gsap.registerPlugin(ScrollTrigger);
  const img = useRef(null);
  const video = useRef(null);
  useLayoutEffect(() => {
    const elem = img.current;
    ScrollTrigger.config({ ignoreMobileResize: true });
    const mm = gsap.matchMedia(),
      breakPoint = 650;
    mm.add(
      {
        isMobile: `(max-width: ${breakPoint}px)`,
        isTablet: `(min-width: ${breakPoint + 1}px)`,
        isDesktop: `(min-width: ${breakPoint + 340}px)`,
      },
      (context) => {
        let { isDesktop, isMobile, isTablet } = context.conditions;
        gsap.to(elem, {
          translateY: "-30%",
          translateX: `${language === "ru" ? "205%" : "201%"}`,
          scrollTrigger: {
            scrub: 3,
            trigger: elem,
            start: isDesktop
              ? "top 100%"
              : isTablet
              ? "top 50%"
              : isMobile
              ? "top 45%"
              : null,
            end: "bottom",
            toggleActions: "retart pause reverse pause",
          },
        });
      }
    );
  }, []);

  useLayoutEffect(() => {
    const desktopParamX = "10%";
    const desktopParamY = "5%";
    const mobileParamX = "0%";
    const mobileParamY = "20%";
    const elem = video.current;
    ScrollTrigger.config({ ignoreMobileResize: true });
    let mm = gsap.matchMedia();
    const breakPoint = 990;
    mm.add(
      {
        isMobile: `(max-width: ${breakPoint}px)`,
        isDesktop: `(min-width: ${breakPoint + 1}px)`,
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;
        gsap.to(elem, {
          translateX: isDesktop ? desktopParamX : mobileParamX,
          translateY: isDesktop ? desktopParamY : mobileParamY,
          scrollTrigger: {
            scrub: 3,
            trigger: elem,
            start: isDesktop ? "top 100%" : isMobile ? "top 0%" : null,
            end: "bottom",
            toggleActions: "retart pause reverse pause",
          },
        });
      }
    );
  }, []);
  return (
    <article id="aboutMeContent" className="content__about">
        <div className="about__video_top">
          <video preload="metadata" muted playsInline loop autoPlay>
            <source src={glowVideo} type="video/mp4" />
          </video>
        </div>
        <div className="about__video_left">
          <video ref={video} preload="metadata" muted playsInline loop autoPlay>
            <source src={astranautVideo} type="video/mp4" />
          </video>
        </div>
        <div className="about__item">
          <div className="about__item_title">
              <h1>{t("AboutMe.title")}</h1>
          </div>
          <TextWrapper>
            <span>{t("AboutMe.firstLetter")}</span>
            <span>{t("AboutMe.secondLetter")}</span>
            <span>{t("AboutMe.thirdLetter")}</span>
            <span>{t("AboutMe.fourthLetter")}</span>
          </TextWrapper>
        </div>
        <div className="about__item_img">
          <picture>
            <source srcSet={photoAboutMeWebp} type="image/webp" />
            <img
              ref={img}
              src={photoAboutMe}
              type="image/png"
              alt="Not Found"
            />
          </picture>
        </div>
    </article>
  );
});

export default AboutMe;
