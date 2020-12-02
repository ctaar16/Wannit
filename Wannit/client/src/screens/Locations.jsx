import React from 'react';
import { Link } from 'react-router-dom';

export default function Locations(props) {
  console.log(props)
  return (
    <div>
      <h3 className="username">Locations</h3>
      {
        props.locations.map(location => (
          <React.Fragment key={location.id}>
            <Link to={`/locations/${location.id}`}><p className="username">{location.name}</p></Link>
            {
              
              // location.user_id === props.currentUser?.id &&
              <>
                <Link to={`/locations/${location.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => props.handleDelete(location.id)}>Delete</button>
             
              </>
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/locations/new'><button>Create</button></Link>
 
    </div>
  )
}