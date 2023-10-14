import '../../../App.scss';
import React from 'react';

export const AppChoiseWord = React.memo(({setChoice}) => {
  return (
     <div className='choice__content'>
        <div className='choice__items'>
          <div className="choice__item _choice_first">
            <button onClick={() => setChoice(2)}>
              <span className="choice__label">2D-World</span>
              <span className="choice__icon">
                <span></span>
              </span>
            </button>
          </div>
          <div className="choice__item _choice_second">
            <button onClick={() => setChoice(3)}>
              <span className="choice__label">3D-World</span>
              <span className="choice__icon">
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>
  )
})