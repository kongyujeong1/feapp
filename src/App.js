import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterApp from './RouterApp';

function App() {

  return (
      <BrowserRouter>
            <RouterApp />
      </BrowserRouter>
  );
};

export default App;
