import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greeting from './components/Greeting';
function App() {
  return <> 
    <Greeting name='Elon Musk' word='Hello'/>
    <Greeting name='Elen'  word='Bye'/>
    <Greeting name='Tim Lee' word='qwerty'/>
  </>
}
export default App;