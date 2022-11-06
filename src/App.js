import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import useApi from './hooks/useApi'

import Footer from './components/footer/Footer'
import CategoryList from './pages/category/CategoryList'
import CategoryDetail from './pages/category/CategoryDetail'
import Home from './pages/home/Home'
import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const api = useApi()

  api
    .get('shop/countries')
    .then((response) => {
      console.log('RESPONSEDATA::>', response)
    })
    .catch((err) => {
      console.log('ERRDATA::', err)
    })
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category">
            <Route path=":categoryId" element={<CategoryDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
      <Footer />
    </React.Fragment>
  )
}

export default App
