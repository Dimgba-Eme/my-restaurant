import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Menu />
      <Reservations />
      <OrderOnline />
      <Login />
    </div>
  );
}

export default App;
