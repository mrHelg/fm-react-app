import React, { Component } from 'react';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
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
    fetch(
      `https://randomuser.me/api/?results=10&page=${currentPage}&seed=users`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ isLoaded: true, users: data.results });
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

  render() {
    const { users, isLoaded, isError, currentPage } = this.state;

    if (isError) {
      return <div>Error</div>;
    }
    if (isLoaded) {
      return (
        <div>
          <h2>User list</h2>
          <button onClick={this.prevPage}>&lt;</button>
          <button onClick={this.nextPage}>&gt;</button>
          <p>Page: {currentPage}</p>
          <ul>
            {users.map((user) => (
              <li
                key={user.login.uuid}
              >{`${user.name.first} ${user.name.last}`}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default UsersLoader;
