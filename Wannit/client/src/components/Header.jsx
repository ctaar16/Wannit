import React from 'react';
import { Link } from 'react-router-dom';
import headerBackground from '../assets/header.jpg'


export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className = "header" style = {{backgroundImage: `url(${headerBackground})`}}>
      
      <p className = "Appname">Wannit</p>
      <h2 className = "slogan">See it, want it, list it, own it!</h2>
      {
        currentUser ?
          <>
            <p className="user">{currentUser.username}</p>
            <button className="button"  onClick={handleLogout}>Logout</button>
          </>
          :
          <Link  to='/login'><button className ="button">Login / Register</button></Link>
      }
      <hr className="line"/>
      {
        currentUser &&
        <>
          <Link  to='/items'><button className ="button">Items List</button></Link>
          <Link to='/locations'><button className ="button">Locations List</button></Link>
        </>
      }
    </div>
  )
}
