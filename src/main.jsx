import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SmoothScrolling from './components/utils/SmoothScrolling.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SmoothScrolling>
      <StrictMode>
        <App />
      </StrictMode>
    </SmoothScrolling>
  </BrowserRouter>
)
