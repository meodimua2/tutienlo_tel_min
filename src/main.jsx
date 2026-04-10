import React from 'react'
import ReactDOM from 'react-dom/client'
import VConsole from 'vconsole'
import App from './App.jsx'
import { UserProvider } from "./context/UserProvider";
import './index.css'

if (typeof window !== "undefined" && import.meta.env.DEV) {
  window.__VCONSOLE__ = new VConsole();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
)