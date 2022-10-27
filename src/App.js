import './App.css';
import { Fragment } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
