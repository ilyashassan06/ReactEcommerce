import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ProductsProvider from './assets/context/Productcontext.jsx';
import CartProvider from './assets/context/CartContext.jsx';
import ThemeToggleContext from './assets/context/ThemeToggleContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeToggleContext>
  <CartProvider>
  <ProductsProvider>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </ProductsProvider>
  </CartProvider>
  </ThemeToggleContext>
)
