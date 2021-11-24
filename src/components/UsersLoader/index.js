import React, { Component } from 'react';
import { getUsers } from '../../api';
import Spinner from '../Spinner';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    const { currentPage } = this.state;
    getUsers({ page: currentPage, res: 10 })
      .then((data) => {
        console.log(data);
        if (data.error) {
          this.setState({ error: data.error });
        } else {
          this.setState({ error: null, isLoaded: true, users: data.results });
        }
      })
      .catch((error) => {
        this.setState({ isError: true });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage != prevState.currentPage) {
      this.load();
    }
  }

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState((state, props) => ({
        currentPage: this.state.currentPage - 1,
      }));
    }
  };

  nextPage = () => {
    this.setState((state, props) => ({
      currentPage: this.state.currentPage + 1,
    }));
  };

  createUser = (user) => (
    <li key={user.login.uuid}>{`${user.name.first} ${user.name.last}`}</li>
  );

  render() {
    const { users, isLoaded, error, currentPage } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }
    if (isLoaded) {
      return (
        <div>
          <h2>User list</h2>
          <button onClick={this.prevPage}>&lt;</button>
          <button onClick={this.nextPage}>&gt;</button>
          <p>Page: {currentPage}</p>
          <ul>{users.map(this.createUser)}</ul>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default UsersLoader;
