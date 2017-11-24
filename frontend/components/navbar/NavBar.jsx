import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

export default ({ currentUser, logout }) => {

  const display = currentUser ? (
    <nav>
      <ul className="navbar">
        <li><Link to="/" className="logo">liqr</Link></li>
        <li><a href="#/home">My Pictures</a></li>
        <li><a href="#/albums">My Albums</a></li>
        <li><a href="#/explore">Explore</a></li>
        <li className="right"><a onClick={logout}>Logout</a></li>
        <li className="right"><a>Welcome: {currentUser.username}</a></li>
        <li className="right"><a href="#/upload"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
      </ul>
    </nav>
  ) : (
    <nav>
      <ul className="navbar">
        <li><Link to="/" className="logo">liqr</Link></li>
        <li className="right"><Link to="/signup">Signup</Link></li>
        <li className="right"><Link to="/login">Login</Link></li>
      </ul>
    </nav>

  );

  return (
    <div>
      {display}
    </div>
  );
};
