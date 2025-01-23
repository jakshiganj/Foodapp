import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import StoreContextProvider from 'C:/Users/jaksh/web/food-app/frontend/src/context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
    </BrowserRouter>


)
