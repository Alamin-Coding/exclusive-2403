import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './context/UserContext.jsx'
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { store } from "./app/store.js"
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <UserProvider>
      <App /> 
    </UserProvider>
  </Provider>
  // </StrictMode>,
)
