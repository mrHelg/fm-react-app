import './App.css';
import React, {Component} from 'react';
import Ciao from './components/CiaoSection/Ciao';

function App(){
  const user = {
    id:1,
    name:'Elon'
  }
  return <>
  <Ciao name={user.name} id={user.id}/>
  </>;
  
}
export default App;