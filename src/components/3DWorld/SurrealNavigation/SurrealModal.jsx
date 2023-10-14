import React from "react"
import './SurrealNav.scss'
import { useTranslation } from "react-i18next"

const SurrealModal = React.memo(({ infoVisible, lazy }) => {
  const { t } = useTranslation('global')

  if (lazy && !infoVisible) {
  return null
  }
  
  return (
    <div className={`surreal__info_content ${infoVisible && '_openSurrealInfo'}`}>
      <div className={"info__items"}>
        <div className="info__item">
          <div className="info__item_title">
            <span>
              {t('SurrealModal.information')}
            </span>
          </div>
        </div>
        <div className="info__item">
          <div className="info__item_text">
            <span>
              {t('SurrealModal.text')}
              <a href="https://www.artstation.com/artwork/OGP0oe" target="_blank" rel="noreferrer">
              {t('SurrealModal.here')}
              </a>.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})
export default SurrealModal