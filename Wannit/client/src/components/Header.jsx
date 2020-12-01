import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <h1>Wannit</h1>
      <h3>See it, want it, list it, own it.</h3>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login/Register</Link>
      }
      <hr />
      {
        currentUser &&
        <>
          <Link to='/items'>Items</Link>
          <Link to='/locations'>Locations</Link>
        </>
      }
    </div>
  )
}
