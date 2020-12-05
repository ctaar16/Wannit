import React from 'react';
import { Link } from 'react-router-dom';

export default function Locations(props) {
  console.log(props)
  return (
    <div>
      <h3 className="text1">Locations</h3>
      {
        props.locations.map(location => (
          <React.Fragment key={location.id}>
            <Link to={`/locations/${location.id}`}><p className="text2">{location.name}</p></Link>
            {
              
              // location.user_id === props.currentUser?.id &&
              <>
                <Link to={`/locations/${location.id}/edit`}><button className="button">Edit</button></Link>
                <button className="button" onClick={() => props.handleDeleteLocation(location.id)}>Delete</button>
             
              </>
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/locations/new'><button className="button">Create</button></Link>
 
    </div>
  )
}