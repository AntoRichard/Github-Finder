import React, { useState, useContext } from 'react';
const Search = ({ setAlert, searchUser }) => {
  const [user, setUser] = useState('');
  const nameChangeHandler = event => {
    console.log(user);
    setUser(event.target.value);
  };
  const onSubmitHandler = event => {
    event.preventDefault();
    if (user === '') {
      setAlert('please enter something . . . !', 'light');
    } else {
      searchUser(user);
      setUser('');
    }
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="user"
          placeholder="Search user . . . "
          value={user}
          onChange={nameChangeHandler}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

export default Search;
