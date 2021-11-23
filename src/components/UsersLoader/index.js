import React, { Component } from 'react';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      isLoaded: false,
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10&page=2&seed=users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ isLoaded: true, users: data.results });
      })
      .catch((error) => {
        this.setState({ isError: true });
      });
  }

  render() {
    const { users, isLoaded, isError } = this.state;

    if (isError) {
      return <div>Error</div>;
    }
    if (isLoaded) {
      return (
        <div>
          <h2>User list</h2>
          <ul>
            {users.map((user) => (
              <li key={user.login.uuid}>{JSON.stringify(user, null, 7)}</li>
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
