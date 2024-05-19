import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Introduce } from './pages/Introduce'
import { News } from './pages/News'
import { Projects } from './pages/Projects'
import { Service } from './pages/Service'
import { Contact } from './pages/Contact'
import { Account } from './pages/Account'
import { ProductDetail } from './pages/ProductDetail'
import { LoveProduct } from './pages/LoveProduct'
import { OrderNow } from './pages/OrderNow'
import { PageThankyou } from './pages/PageThankyou'
import { Managerment } from './managerment/Managerment'
import { ShopCart } from './components/ShopCart'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="/"/>
          <Route Component={Products} path='/products'/>
          <Route Component={Introduce} path='/introduce'/>
          <Route Component={News} path='/news'/>
          <Route Component={Projects} path='/project'/>
          <Route Component={Service} path='/service'/>
          <Route Component={Contact} path='/contact'/>
          <Route Component={Account} path='/account'/>
          <Route Component={LoveProduct} path='/love-product'/>
          <Route Component={OrderNow} path='/order-now'/>
          <Route Component={PageThankyou} path='/thank-you'/>
          <Route Component={ProductDetail} path='/product/:productId'/>
          <Route Component={Managerment} path='/admin'/>
          <Route Component={ShopCart} path='shop-cart'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
