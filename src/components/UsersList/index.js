import React, { Component } from 'react';
import UserCard from '../UserCard';
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

class UsersList extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:userDB
    }
  }
  mapUsers = (user)=>{return (
    <UserCard key={user.id} user={user}/>
  )}
  render() {
    const {users} = this.state;
    return (
      <section>
        <h1>List of user:</h1>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UsersList;
