import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Products/>
    </div>
  );
}

export default App;
