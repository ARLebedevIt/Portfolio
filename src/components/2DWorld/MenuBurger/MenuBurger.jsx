import React from "react";
import './MenuBurger.scss'

const MenuBurger = React.memo(({menuOpen, openMenu}) => {
  return (
      <div onClick={() => openMenu(value => !value)} className={`burgerMenu ${menuOpen && "burgerMenuActive"}`}>
        <span></span>
      </div>
  )
})

export default MenuBurger