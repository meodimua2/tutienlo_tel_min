import React from 'react'
import ReactDOM from 'react-dom/client'
import VConsole from 'vconsole'
import App from './App.jsx'
import { UserProvider } from "./context/UserProvider";
import './index.css'

if (typeof window !== "undefined" && import.meta.env.DEV) {
  window.__VCONSOLE__ = new VConsole();
  // Bring VConsole to the top
  setTimeout(() => {
    const vconsoleEl = document.querySelector('.vc-switch, .vc-panel');
    if (vconsoleEl) {
      vconsoleEl.style.zIndex = '2147483648'; // Higher than sheet
    }
  }, 1000);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
)