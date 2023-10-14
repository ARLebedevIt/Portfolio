import React from 'react'
import './TextWrapper.scss'

const TextWrapper = ({children, className}) => {
  
  return (
    <div className={`textWrapper ${className ?? ''}` }>
      {children}
    </div>
  )
}

export default TextWrapper