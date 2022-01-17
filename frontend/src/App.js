import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Routes>
          <Route path='/login/shipping' element={<ShippingScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/:category' element={<CategoryScreen />} />
          <Route path='product/:id' element={<ProductScreen />} />
          <Route path='/cart'>
            <Route path=':id' element={<CartScreen />} />
            <Route path='' element={<CartScreen />} />
          </Route>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
