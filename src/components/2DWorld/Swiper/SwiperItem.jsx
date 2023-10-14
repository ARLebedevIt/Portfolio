import React from 'react'
import './Swiper.scss'
import { useTranslation } from 'react-i18next'


const SwiperItem = ({ title, photoSrc, linkGH, linkDir, playHover }) => {
  const { t } = useTranslation('global')
  return (
    <div className="swiper__projects_items">
      <span className="swiper__title">{title}</span>
      <div className="swiper__item_desciption">
        <div className="swiper__item_photo" >
          <img src={photoSrc} alt="Not Found" />
        </div>
        <div className="swiper__item_links">
          <a onMouseEnter={playHover} target={'_blank'} href={linkGH}>GitHub</a>
          <a onMouseEnter={playHover} target={'_blank'} href={linkDir}>{t("Projects.link")}</a>
        </div>
        <div className="swiper__item_text">
          {t(`Projects.${title}.firstLetter`, 'empty') !== 'empty' && <span>{t(`Projects.${title}.firstLetter`)}</span>}
          {t(`Projects.${title}.secondLetter`, 'empty') !== 'empty' && <span>{t(`Projects.${title}.secondLetter`)}</span>}
          {t(`Projects.${title}.thirdLetter`, 'empty') !== 'empty' && <span>{t(`Projects.${title}.thirdLetter`)}</span>}
        </div>
      </div>
    </div>
  )
}

export default SwiperItem