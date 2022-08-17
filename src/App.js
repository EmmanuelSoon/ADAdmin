import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

import useToken from './components/useToken';
import Login from './components/LoginComponent';

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
