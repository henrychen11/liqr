import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

export default ({ currentUser, logout }) => {

  const display = currentUser ? (
    <nav>
      <ul className="navbar">
        <li className="logo" href="#/home">liqr</li>
        <li><a href="#/home">My Pictures</a></li>
        <li><a href="#/albums">My Albums</a></li>
        <li><a href="#/explore">Explore</a></li>
        <li className="right"><a><button onClick={logout}>Logout</button></a></li>
        <li className="right"><a>Welcome: {currentUser.username}</a></li>
        <li href="#/upload" className="right"><a><i className="fa fa-upload" aria-hidden="true"></i></a></li>
      </ul>
    </nav>
  ) : (
    <nav>
      <ul className="navbar">
        <li className="logo">liqr</li>
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
