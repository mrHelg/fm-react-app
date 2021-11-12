import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Ciao from './components/Ciao';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users:[
        {
          id:1,
          fname:'Elon'
        },
        {
          id:2,
          fname:'Elen'
        },
        {
          id:3,
          fname:'Tim'
        },
        {
          id:4,
          fname:'Bob'
        },
        {
          id:5,
          fname:'Sasha'
        },
        {
          id:6,
          fname:'Rob'
        },
        {
          id:7,
          fname:'Alex'
        },
        {
          id:8,
          fname:'Rex'
        },
      ]
    }
  }
  render(){
    const {users} = this.state;
    return <ul>
      {users.map(({fname})=><li><Ciao name={fname} /></li>)}
    </ul>;
  }
}
export default App;