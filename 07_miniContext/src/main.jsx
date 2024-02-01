import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContextProvider from './contexts/UserContextProvider.jsx'

// Wrap the whole component and use the context inside it

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </UserContextProvider>
)
