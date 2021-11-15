import React from 'react';

const SelectedUsersList = (props) => {
  const {users} = props;
  const selectedUsers = users.filter((user)=>user.isSelected);
  return (
    <div>
      {selectedUsers.map(({id, fname})=>{
        return <span key={id}>{fname}</span>
      })}
    </div>
  );
}

export default SelectedUsersList;
