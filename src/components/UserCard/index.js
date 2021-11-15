import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    const {user:{id, fname}} = this.props;
    return (
      <article>
      <h2><span>{id}) </span>{fname}</h2>
    </article>
    );
  }
}

export default UserCard;
