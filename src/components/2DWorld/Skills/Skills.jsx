import React, { useEffect, useRef } from "react";
import './Skills.scss';
import photoSkills from '../../../assets/image/skillsPhoto.png'
import photoSkillsWebp from '../../../assets/image/skillsPhotoWebp.webp'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import TextWrapper from "../../Common/TextWrapper/TextWrapper";
import { useLayoutEffect } from "react";

const Skills = React.memo(() => {
  const { t } = useTranslation('global')
  gsap.registerPlugin(ScrollTrigger);
  const img = useRef(null);
  useLayoutEffect(() => {
    const elem = img.current;
    ScrollTrigger.config({ ignoreMobileResize: true });
    let mm = gsap.matchMedia(),
      breakPoint = 650;
    mm.add({
      isMobile: `(max-width: ${breakPoint}px)`,
    }, (context) => {
      let { isMobile } = context.conditions;
      if (isMobile) {
        gsap.to(elem, {
          translateX: '180%',
          translateY: '-30%',
          scrollTrigger: {
            scrub: 3,
            trigger: elem,
            anticipatePin: 1,
            start: 'top 55%',
            end: 'bottom',
            toggleActions:
              'retart pause reverse pause'
          },
        })
      }
    });
  }, [])
  return (
    <article id="skillsContent" className="content__skills">
        <div className="skills__item">
          <div className="skills__item_title">
            <h1>{t('Skills.title')}</h1>
          </div>
          <TextWrapper >
          <div className="skills_tech" >
            {t('Skills.firstLetter')}
            <span>HTML</span>
            <span>Java Script</span>
            <span>React</span>
            <span>Redux, RTK Query, Toolkit</span>
            <span>TypeScript</span>
            <span>R3 Fiber/Drei</span>
            <span>Node.JS</span>
            <span>CSS</span>
            <span>SCSS</span>
          </div>
          <span>{t('Skills.secondLetter')}</span>
          </TextWrapper>
        </div>
        <div className="skills__item_img">
          <picture>
            <source srcSet={photoSkillsWebp} type="image/webp" />
            <img ref={img} src={photoSkills} type="image/png" alt="Not Found" />
          </picture>
        </div>
    </article>
  )
})

export default Skills