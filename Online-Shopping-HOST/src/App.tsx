import Home from './pages/home';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./layout/Header"
import { ProductDetail } from './pages/ProductDetail';
import { Footer } from './layout/Footer';
function App() {

  return (
    <>

      <BrowserRouter>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <div className='flex-grow'>
            <Routes>
              <Route path='/' index element={<Home />}></Route>
              <Route path='/products/:id' element={<ProductDetail />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
