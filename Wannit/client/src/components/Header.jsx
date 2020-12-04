import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className = "header" >
      
      <h1 className = "Appname">Wannit</h1>
      <h2 className = "Appname">See it, want it, list it, own it!</h2>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button className="button"  onClick={handleLogout}>Logout</button>
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
