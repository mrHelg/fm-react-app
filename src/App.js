import './App.css';
import React, {Component} from 'react';
import UsersList from './components/UsersList';
import SelectedUsersList from './components/SelectedUsersList';
const userDB = [
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
];

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      users:userDB.map((user)=>({...user, isSelected:false}))
    }
  }

  setUserSelector = (newUsers)=>{this.setState({users:newUsers})}

  render(){
    const {users} = this.state;
   return <>
   <header><SelectedUsersList users={users}/></header>
   <main><UsersList  users={users} setUserSelector={this.setUserSelector}/></main> 
  </>;  
  }
}
export default App;