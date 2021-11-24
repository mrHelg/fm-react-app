import React, { Component } from 'react';
import { getUsers } from '../../api';
import config from '../../config';
import Spinner from '../Spinner';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
      currentPage: 1,
      currentResults: config.DEFAULT_AMOUNT,
      currentNat: config.DEFAULT_NAT,
    };
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    const { currentPage, currentResults, currentNat } = this.state;
    getUsers({ page: currentPage, results: currentResults, nat: currentNat })
      .then((data) => {
        // console.log(data);
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
    const { currentPage, currentResults, currentNat } = this.state;
    if (
      currentPage !== prevState.currentPage ||
      currentResults !== prevState.currentResults ||
      currentNat !== prevState.currentNat
    ) {
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
    <li
      key={user.login.uuid}
    >{`${user.name.first} ${user.name.last}, ${user.nat} (${user.gender})`}</li>
  );

  radioBtnValue = ({ target }) => {
    if (target.value !== this.state.currentResults) {
      this.setState({ currentResults: Number(target.value) });
    }
  };

  countryHandler = ({ target }) => {
    if (target.value !== this.state.currentNat) {
      this.setState({ currentNat: target.value });
    }
  };

  render() {
    const { users, isLoaded, error, currentPage, currentResults, currentNat } =
      this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }
    if (isLoaded) {
      return (
        <div>
          <h2>User list</h2>
          <button onClick={this.prevPage}>&lt;</button>
          <button onClick={this.nextPage}>&gt;</button>
          <div>
            <label>
              <input
                onChange={this.radioBtnValue}
                type="radio"
                name="results"
                value={5}
                checked={currentResults === 5}
              />
              5
            </label>
            <label>
              <input
                onChange={this.radioBtnValue}
                type="radio"
                name="results"
                value={10}
                checked={currentResults === 10}
              />
              10
            </label>
            <label>
              <input
                onChange={this.radioBtnValue}
                type="radio"
                name="results"
                value={15}
                checked={currentResults === 15}
              />
              15
            </label>
          </div>
          <select value={currentNat} onChange={this.countryHandler}>
            <option value="gb">GB</option>
            <option value="us">US</option>
            <option value="no">NO</option>
            <option value="fr">FR</option>
          </select>

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
