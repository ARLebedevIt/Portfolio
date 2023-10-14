import React, { useEffect, useState } from "react";
import './Footer.scss'

const Footer = React.memo(() => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    let time = setInterval(() => setDateState(new Date()), 30000);
    return () => clearInterval(time)
  }, []);
  return (
    <footer className="content__footer">
      <div className="footer__items">
        <div className="footer__item">
          <span>{`${dateState.getHours()} : ${dateState.getMinutes()}`}</span>
        </div>
        <div className="footer__item">
          <span>2023</span>
        </div>
        <div className="footer__item">
          <span>A.Lebedev</span>
        </div>
      </div>
    </footer>
  )
})

export default Footer