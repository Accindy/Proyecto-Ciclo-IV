import logo from './logo.svg';
import './App.css';

import { Fragment } from 'react';
import Login from './Components/Login';
import ForgotPasword from './Components/ForgotPassword';
import Register from './Components/Register';

function App2() {
    return (
        <Fragment>
          <Login />
          <ForgotPasword />
          <Register />     
        </Fragment>
      );
    }

export default App2
