import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:svg-icons-register'

import App from './App.tsx'

// CSS
import '@/styles/index.css'
// i18n
import './locales'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
