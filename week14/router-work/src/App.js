import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";

function App() {
  return (
      <div>
        <NavBar />
         <Routes>
             <Route path='/' element={<Home />}></Route>
             <Route path='about' element={<About />}></Route>
             <Route path='ordersummary' element={<OrderSummary />}></Route>
         </Routes>
      </div>
  );
}

export default App;
