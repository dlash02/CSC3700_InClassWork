import './App.css';
import NavBar from "./NavBar";
import Books from "./Books";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from "./Create";
import BookDetails from "./BookDetails";
import NotFound from "./NotFound";
import BookDetailsWUpdate from "./BookDetailsWUpdate";
import BookUpdateV2 from "./BookUpdateV2";
import Profile from "./Profile";
import {AuthProvider} from "./auth";
import Login from "./Login";


function App() {
  return (
      <div className="App">
          <AuthProvider>
          <NavBar />
              <Routes>
                  <Route exact path="/" elemnent={<Books/>} />
                  <Route path="create" element={<Create/>}> />
                  <Route path="/books/:id" element={<BookDetailsWUpdate/>} />
                  <Route path="/BookUpdate/:id" element={<BookUpdateV2/>} />
                  <Route path="/Profile" element={<Profile/>} />
                  <Route path="/Login" element={<Login/>} />
                      <Route path='*' element={<NotFound/>} />
                  </Route>
              </Routes>
          </AuthProvider>
      </div>
  );
}

export default App;
