import './App.css';
import NavBar from "./NavBar";
import Books from "./Books";
import { BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import Create from "./Create";
import BookDetails from "./BookDetails";


function App() {
  return (
      <div className="App">
          <NavBar/>
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Books/>
                  </Route>
                  <Route path="/create">
                      <Create/>
                  </Route>
                  <Route path="/books/:id">
                      <BookDetails/>
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
