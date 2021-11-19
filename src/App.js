import './App.css';
import React, { Component } from 'react';
import Ciao from './components/CiaoSection/Ciao';
import UserCard from './components/UserCard';
import UsersList from './components/UsersList';
import CiaoList from './components/CiaoSection/CiaoList';

function App() {
  const users = [
    { id: 1, fname: 'Elon' },
    { id: 2, fname: 'Elen' },
  ];
  return (
    <>
      <CiaoList users={users} />
    </>
  );
}
export default App;
