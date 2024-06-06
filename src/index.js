import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import  {CartProvider}  from './stores/context/CartContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<React.StrictMode>
   <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>
</BrowserRouter>
);


