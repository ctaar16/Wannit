import React from 'react'

export default function Locations(props) {
  return (
    <div>
      <h3 className="username">Locations</h3>
      {
        props.locations.map(location => (
        <p className="username" key={location.id}>{location.name}</p>
        ))
      }
    </div>
  )
}
