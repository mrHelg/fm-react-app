import React, { Component } from 'react';

class UserCard extends Component {

  render() {
    const {user:{id, fname, isSelected}, userSelector} = this.props;
    const styles = {border: isSelected?'solid 3px pink':undefined}
    return (
      <article style={styles}>
        <h2><span>{id}) </span>{fname}</h2>
        <button onClick={()=>{userSelector(id)}}>Select this user</button>
      </article>
    );
  }
}

export default UserCard;
