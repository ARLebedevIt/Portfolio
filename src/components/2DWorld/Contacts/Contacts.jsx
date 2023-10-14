import React, { useMemo } from "react";
import './Contacts.scss'
import contactsVideo from "../../../assets/video/contactsVideo.mp4"
import useSound from "use-sound";
import hoverSound from '../../../assets/sound/hoverSound.wav'
import { useTranslation } from "react-i18next";
import { contactsData } from "../../../data/contactsData";

const Contacts = React.memo(() => {
  const [playHover] = useSound(hoverSound, { volume: 0.05 });
  const { t } = useTranslation('global')

  const items = useMemo(() => {
    return contactsData.map((item) => {
      return (
        <a key={item.link} onMouseEnter={playHover} className="society__item_link" target={'_blank'} href={item.link} rel="noreferrer">
          <img  src={item.icon} alt="Изображение не найдено" />
        </a>
      )
    })
  }, [playHover])

  return (
    <article id="contactsContent" className="content__contacts">
        <div className="contacts__item_title">
          <h1>{t('Contacts.title')}</h1>
        </div>
          <div className="society__items_list">
              {items}
          </div>
          <div className="contacts__item_video">
            <video preload="metadata" muted playsInline loop autoPlay>
              <source src={contactsVideo} type="video/mp4" />
            </video>
          </div>
    </article>
  )
})

export default Contacts