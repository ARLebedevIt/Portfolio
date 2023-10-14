import React from 'react'
import './GlitchText.scss'

const GlitchText = ({children, className, text}) => {
  return (
    <div data-text={text} className={`glitchText ${className ?? ''}` }>
      {children}
    </div>
  )
}

export default GlitchText