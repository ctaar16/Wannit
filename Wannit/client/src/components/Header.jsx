import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className = "header">
      <h1>Wannit</h1>
      <h3>See it, want it, list it, own it.</h3>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button className="username"  onClick={handleLogout}>Logout</button>
          </>
          :
          <Link className ="username" to='/login'>Login/Register</Link>
      }
      <hr />
      {
        currentUser &&
        <>
          <Link className ="itemsb" to='/items'>Items</Link>
          <Link className ="locationsb" to='/locations'>Locations</Link>
        </>
      }
    </div>
  )
}
