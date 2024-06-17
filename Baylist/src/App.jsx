import './App.css'

//router
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Login from './routes/login';
import Account from './routes/account';
import Notifications from './routes/notifications';
import Cart from './routes/cart';
import Search from './routes/search';
import Signup from './routes/signup';
import Favorites from './routes/favorites';
import Checkout from './routes/checkout';
import ProductDetail from './routes/product';
import UserPage from './routes/user';
import SellerDashboard from './routes/sellerdashboard';
import NotFound from './routes/notfound';
import Layout from './routes/layout'; //can use later as index

function App() {

  return (
    <>
    <div className="App">
    {/* routes */}
      <Routes>
          {/* Define your routes */}
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/account" element={<Account/>} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/favorites" element={<Favorites/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/product/:id" element={<ProductDetail/>} />
              <Route path="/user/:username" element={<UserPage/>} />
              <Route path="/seller-dashboard" element={<SellerDashboard/>} />
              <Route path="*" element={<NotFound/>} />
          {/* Footer can go here */}
      </Routes>
      </div>
    </>
  )
}
export default App
