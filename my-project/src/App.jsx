import { useState } from 'react'
import { ProductsContext } from './Context/ProductsContext'
import { useEffect } from 'react'
import Header from './components/Header'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import ProductPage from './pages/ProductPage'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import { Home } from './pages/Home'
import './App.css'
import { data } from 'autoprefixer'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() =>{
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data))
  })

 

  return (
    
    <ProductsContext.Provider value={{products,cart, setCart}}>
      <BrowserRouter>
        <Header></Header>

        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    </ProductsContext.Provider>
     
  

      
  )
}

export default App
