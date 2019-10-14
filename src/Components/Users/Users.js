import React from 'react';
import UserItem from './UserItem';
import Spinner from '../Layouts/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  const styles = {
    user: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gridGap: '1rem'
    }
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={styles.user}>
        {users.map(user => (
          <UserItem
            key={user.id}
            login={user.login}
            avatar_url={user.avatar_url}
            html_url={user.html_url}
          />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
