import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Ciao from './components/Ciao';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      fname:'Elon',
      sname:'Musk'
    }
  }
  render(){
    const {fname} = this.state;
    return <>
    <Ciao name={fname} />
    <Ciao name='Elen' />
    </>;
  }
}
export default App;