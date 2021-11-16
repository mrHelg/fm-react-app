import React, { Component } from 'react';
import SelectedUsersList from '../components/SelectedUsersList';
import UsersList from '../components/UsersList';

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
class UserSection extends Component {
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

export default UserSection;
