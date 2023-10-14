import './App.scss';
import React, { Suspense, useState, lazy } from 'react';
import { AppChoiseWord } from './components/Common/AppChoise/AppChoise';
import { LangChoise } from './components/Common/LangChoise/LangChoise';


export const App = React.memo(() => {
  const TwoDWorld = lazy(() => import(/* webpackChunkName: "TwoDWorld" */ './components/2DWorld/TwoDWorldApp.jsx'))
  const ThreeDWorld = lazy(() => import(/* webpackChunkName: "ThreeDWorld" */ './components/3DWorld/ThreeDWorldApp.jsx'))
  const [valueChoice, setChoice] = useState(null)
  return (
    <>
      {valueChoice === null && <LangChoise />}
      {valueChoice === null && <AppChoiseWord setChoice={setChoice} />}

      {valueChoice === 2 && <Suspense fallback={null}>
        <TwoDWorld />
      </Suspense>}

      {valueChoice === 3 && <Suspense fallback={null}>
          <ThreeDWorld />
      </Suspense>
      }
    </>
   
  )
})