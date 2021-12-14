import logo from './logo.svg';
import './App.css';


import { Fragment } from 'react';
import NavLateral from './Components/NavLateral';
import Tables from './Components/Tables';


function App() {
  return (
    <Fragment>
      <NavLateral />
      <Tables />
    </Fragment>
  );
}

export default App
