import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

export default ({ currentUser, logout }) => {

  const display = currentUser ? (
    <nav className="navbar">
      <ul>
        <li><Link to="/" id="logo">liqr</Link></li>
        <li><a href="#/home">My Pictures</a></li>
        <li><a href="#/albums">My Albums</a></li>
        <li><a href="#/explore">Explore</a></li>
      </ul>
      <ul>
        <li className="dropdown">
          <a>Welcome: {currentUser.username}</a>
          <div className="dropdown-content">
            <a className="text" onClick={logout}>Logout</a>
            <a className="text" href="#/photos/new">Upload Photo</a>
            <a className="text" href="#/albums/new">Create New Album</a>

          </div>
        </li>
      </ul>
    </nav>
  ) : (
    <nav>
      <ul className="navbar">
        <li><Link to="/" id="logo">liqr</Link></li>
        <div className="session-button">
          <li className=""><Link to="/signup">Signup</Link></li>
          <li className=""><Link to="/login">Login</Link></li>
        </div>

      </ul>
    </nav>

  );

  return (
    <div>
      {display}
    </div>
  );
};

// <a href="javascript:void(0)">Welcome: {currentUser.username}</a>
