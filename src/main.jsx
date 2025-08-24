import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <GlobalStyles />
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
)
