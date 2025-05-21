import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/app-layout.tsx'
import Auth from './pages/auth.tsx'
import Products from './pages/products.tsx'
import SingleProduct from './pages/single-product.tsx'
import Home from './pages/home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Auth />} />
          <Route path='store' element={<Products />} />
          <Route path='store/product-id' element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
