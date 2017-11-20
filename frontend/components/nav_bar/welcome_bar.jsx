import React from 'react';

export default ({ user }) => (
  <header className="nav-bar">
    <h3>Welcome { user.username }!</h3>
  </header>
);
