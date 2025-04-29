import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SheetContextProvider } from './context/SheetContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <SheetContextProvider>
        <App />
    </SheetContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
