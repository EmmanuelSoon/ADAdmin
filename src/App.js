import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent';
import './App.css';

import useToken from './Components/useToken';
import Login from './Components/LoginComponent';

function App() {

  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <BrowserRouter>
    <div>
        <Main /> 
    </div>
  </BrowserRouter>
  );
}

export default App;
