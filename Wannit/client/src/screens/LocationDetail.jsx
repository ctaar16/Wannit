import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addLocation } from "../services/locations";
import { getOneItem } from "../services/items";

export default function LocationDetail(props) {
  const [locationLocation, setLocationLocation] = useState(null);
  const [locationId, setLocationId] = useState("");
  // We can grab the id of the one food from the url params
  const { id } = useParams();

  // In the useEffect, we make an api call to get the one food and set it in local state
  useEffect(() => {
    const fetchLocationLocation = async () => {
      const locationData = await getOneLocation(id);
      setLocationLocation(locationData);
    };
    fetchLocationLocation();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const locationLocation = await addLocation(locationId, id);
    // I changed our response on the backend for this route.
    // instead of getting a list of just the flavors,
    // I grab the whole food object with it's flavors
    // This makes it easy to replace our state with the updated data.
    setLocationLocation(locationLocation);
  };

  // this is the handleChange for the select drop down
  // since this form only has one value, we do not need a variable name for the key
  const handleChange = (e) => {
    const { value } = e.target;
    setLocationId(value);
  };

  return (
    <div>
      <h3>{locationLocation?.name}</h3>
      {locationLocation?.locations.map((location) => (
        <p key={location.id}>{location.name}</p>
      ))}
      {/* below is our for the Location drop down */}
      <form onSubmit={handleSubmit}>
        <select defaultValue="default" onChange={handleChange}>
          {/* we can set a default value to tell people to select a location*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value="default" className="list">
            - Select a location -
          </option>
          {/* now we loop over all flavors and return an <option> tag for each */}
          {props.locations.map((location) => (
            // we track the flavor's id as the "value" which will get added to state onChange
            // the flavor's name goes between the open and close tag which is what the user sees
            <option className="list" value={location.id} key={location.id}>
              {location.name}
            </option>
          ))}
        </select>
        <button className="button">add</button>
      </form>
    </div>
  );
}
