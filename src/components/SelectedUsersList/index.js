import React from 'react';

const SelectedUsersList = (props) => {
  const {users} = props;
  const selectedUsers = users.filter((user)=>user.isSelected);
  return (
    <div>
      {selectedUsers.map(({fname})=>{
        return <span>{fname}</span>
      })}
    </div>
  );
}

export default SelectedUsersList;
