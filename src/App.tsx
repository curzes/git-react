import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import FetchReactTest from './components/FetchReactTest';


function App() {
  return (
    <Router>
      <FetchReactTest />
    </Router>
  );
}

export default App;
