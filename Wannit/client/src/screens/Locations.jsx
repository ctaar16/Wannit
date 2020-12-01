import React from 'react'

export default function Locations(props) {
  return (
    <div>
      <h3>Locations</h3>
      {
        props.locations.map(location => (
        <p key={location.id}>{location.name}</p>
        ))
      }
    </div>
  )
}
