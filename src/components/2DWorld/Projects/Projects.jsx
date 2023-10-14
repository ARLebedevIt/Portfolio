import React from "react";
import './Projects.scss'
import SwiperComponent from "../Swiper/Swiper";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation('global')
  return (
    <article id="projectsContent" className="content__projects">
      <div className="projects__title">
        <h1>{t('Projects.title')}</h1>
      </div>
      <SwiperComponent />
    </article>
  )
}

export default Projects