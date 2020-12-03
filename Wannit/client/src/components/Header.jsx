import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  let image = `http://icons.iconarchive.com/icons/iconsmind/outline/512/Gift-Box-icon.png`
let boxImage = { 

  backgroundImage: `url(${image})`,
  height: "26",
  width: "26",
  backgroundRepeat: "no-repeat",

  

}

  return (
    <div className = "header" style = {boxImage}>
      <h1 >Wannit</h1>
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
