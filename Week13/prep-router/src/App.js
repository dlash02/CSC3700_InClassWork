import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Profile from "./components/Profile";
import {AuthProvider} from "./components/auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
function App() {
  return (
      <AuthProvider>
      <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='orderSummary' element={<OrderSummary />}></Route>
      <Route path='profile' element={<RequireAuth> <Profile /></RequireAuth>}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='products' element={<Products/>}>
        <Route index element={<FeaturedProducts/>}/>
        <Route path='featured' element={<FeaturedProducts/>}/>
        <Route path='new' element={<NewProducts/>}/>
      </Route>
      <Route path='users' element={<Users/>}>
        <Route path=':id' element={<UserDetails/>}></Route>
      </Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
      </AuthProvider>
  );
}

export default App;
