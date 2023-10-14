import { useTranslation } from 'react-i18next';
import '../../../App.scss';
import React, { createContext } from 'react';

export const Choice = createContext(null)

export const LangChoise = React.memo(() => {
  const [_, i18n] = useTranslation("global")
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  return (
     <div className='choiсe__language'>
        <button className={i18n.language === 'ru' ? "_activeLang" : undefined}
          onClick={() => handleChangeLanguage('ru')}>Ru</button>
        <button className={i18n.language === 'en' ? "_activeLang" : undefined}
          onClick={() => handleChangeLanguage('en')}>En</button>
      </div>

  )
})