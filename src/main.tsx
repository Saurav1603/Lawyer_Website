import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import DisclaimerGate from './components/DisclaimerGate'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <DisclaimerGate />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
