import React from 'react';
import PropTypes from 'prop-types';

function UserCard(props) {
  const {
    user: { id, fname, isSelected },
    userSelector,
  } = props;
  const styles = { border: isSelected ? 'solid 3px pink' : undefined };
  return (
    <article style={styles}>
      <h2>
        <span>{id}) </span>
        {fname}
      </h2>
      <button
        onClick={() => {
          userSelector(id);
        }}
      >
        Select this user
      </button>
    </article>
  );
}

UserCard.defaultProps = {
  userSelector: () => {},
  user: { id: 0, fname: 'qwerty', isSelected: true },
};

export const userPropTypes = {
  id: PropTypes.number.isRequired,
  fname: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

UserCard.propTypes = {
  user: PropTypes.shape(userPropTypes).isRequired,
  userSelector: PropTypes.func,
};
export default UserCard;
