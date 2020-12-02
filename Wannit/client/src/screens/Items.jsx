import React from 'react';
import { Link } from 'react-router-dom';

export default function Items(props) {
  return (
    <div>
      <h3 className="username">Items</h3>
      {
        props.items.map(item => (
          <React.Fragment key={item.id}>
            <Link to={`/items/${item.id}`}><p className="username">{item.name}</p></Link>
            {
              item.user_id === props.currentUser?.id &&
              <>
                <Link to={`/items/${item.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => props.handleDelete(item.id)}>Delete</button>
              </>
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/items/new'><button>Create</button></Link>
    </div>
  )
}
