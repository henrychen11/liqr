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
          <a href="javascript:void(0)">Welcome: {currentUser.username}</a>
          <div className="dropdown-content">
            <a className="text" onClick={logout}>Logout</a>
            <a className="text" href="#/photos/new">Upload Photo <i className="fa fa-upload" aria-hidden="true"></i></a>
            <a className="text" href="#/albums/new">Create New Album</a>

          </div>
        </li>
      </ul>
    </nav>
  ) : (
    <nav>
      <ul className="navbar">
        <li><Link to="/" id="logo">liqr</Link></li>
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
// <ul id="gear-dropdown" class="gear-dropdown hidden">
// 	<li>
// 		<ul class="editions">
// 			<span class="dropdown-subtitle">Edition</span>
// 			<li><a href="#">CSS</a></li>
// 			<li><a href="#">HTML</a></li>
// 			<li><a href="#">Javascript</a></li>
// 			<li><a href="#">Ruby</a></li>
// 		</ul>

// Backup display function before dropdwn menu implementation
// export default ({ currentUser, logout }) => {
//
//   const display = currentUser ? (
//     <nav>
//       <ul className="navbar">
//         <li><Link to="/" className="logo">liqr</Link></li>
//         <li><a href="#/home">My Pictures</a></li>
//         <li><a href="#/albums">My Albums</a></li>
//         <li><a href="#/explore">Explore</a></li>
//         <li className="right"><a onClick={logout}>Logout</a></li>
//         <li className="right"><a>Welcome: {currentUser.username}</a></li>
//         <li className="right"><a href="#/photos/new"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
//       </ul>
//     </nav>
//   ) : (
//     <nav>
//       <ul className="navbar">
//         <li><Link to="/" className="logo">liqr</Link></li>
//         <li className="right"><Link to="/signup">Signup</Link></li>
//         <li className="right"><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//
//   );
//
//   return (
//     <div>
//       {display}
//     </div>
//   );
// };
