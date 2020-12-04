import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className = "header" >
      
      <p className = "Appname">Wannit</p>
      <h2 className = "slogan">See it, want it, list it, own it!</h2>
      {
        currentUser ?
          <>
            <p className="user">{currentUser.username}</p>
            <button className="logout"  onClick={handleLogout}>Logout</button>
          </>
          :
          <Link className ="button" to='/login'><button>Login/Register</button></Link>
      }
      <hr className="line"/>
      {
        currentUser &&
        <>
          <Link className ="itemsb" to='/items'><button>Items List</button></Link>
          <Link className ="locationsb" to='/locations'><button>Locations List</button></Link>
        </>
      }
    </div>
  )
}
