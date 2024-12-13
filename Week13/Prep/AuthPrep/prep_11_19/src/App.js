import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
          <div>
            <NavBar />
            <Routes>
               <Route path="profile" element={<Profile />}> ></Route>
            </Routes>
          </div>
      );
}
export default App;
