import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Welcome: {currentUser.username}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link to="/signup">Signup</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );

  return (
    <div>
      {display}
    </div>
  );
};
