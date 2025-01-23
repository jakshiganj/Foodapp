import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Footer from 'C:/Users/jaksh/web/food-app/frontend/src/components/Footer/Footer.jsx';
import LoginPopup from 'C:/Users/jaksh/web/food-app/frontend/src/components/LoginPopup/LoginPopup.jsx';
import setShowLogin from 'C:/Users/jaksh/web/food-app/frontend/src/components/LoginPopup/LoginPopup.jsx';
import MyOrders from './pages/MyOrders/MyOrders';
import Search from './pages/Search/search';


const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
   
  );
}

export default App;
