import React from 'react';
import { Link } from 'react-router-dom';

export default function Items(props) {
  console.log(props)
  return (
    <div>
      <h3 className="text1">Items</h3>
      {
        props.items.map(item => (
          <React.Fragment key={item.id}>
            <Link to={`/items/${item.id}`}><p className="text2">{item.name}</p></Link>
            {
              item.user_id === props.currentUser?.id &&
              <>
                <Link to={`/items/${item.id}/edit`}><button className="button">Edit</button></Link>
                <button className="button" onClick={() => props.handleDelete(item.id)}>Delete</button>
              </>
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/items/new'><button className="button">Create</button></Link>
    </div>
  )
}
