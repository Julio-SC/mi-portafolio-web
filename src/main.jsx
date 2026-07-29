import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n.js' // Aquí conectamos tu CV bilingüe

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)