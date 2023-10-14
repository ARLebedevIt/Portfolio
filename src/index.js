import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import langEN from '../src/translations/en/global.json'
import langRU from '../src/translations/ru/global.json'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
    interpolation: {
        escapeValue: false
    },
    lng: 'ru',
    resources: {
        en: {
            global: langEN
        },
        ru: {
            global: langRU
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
);

reportWebVitals();