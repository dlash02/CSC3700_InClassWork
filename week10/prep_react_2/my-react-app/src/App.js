// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    const like = "Spiderman";
    const sHero = {
        'name' : 'Hulk',
        'power' : 'Smash'
    }
  return (
    <div className="App">
    <Navbar/>
        <div className="container">
          <Hello />
        <h2> I really like {like}</h2>
          <p> My favorite hero is {sHero.name}</p>
          <button className="btn btn-primary"> Primary </button>
          <button className="btn btn-secondary"> Secondary </button>
      </div>
    </div>
  );
}

export default App;
