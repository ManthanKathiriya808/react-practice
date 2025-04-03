import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ApiContextProvider } from './context/ApiContextProvider.jsx'
import { AuthProvider } from './AuthContext/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
  <ApiContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </ApiContextProvider>
  </AuthProvider>
  </BrowserRouter>
)
