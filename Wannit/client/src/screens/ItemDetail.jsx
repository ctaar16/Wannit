import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addLocation } from "../services/locations";
import { getOneItem } from "../services/items";

export default function ItemDetail(props) {
  const [itemItem, setItemItem] = useState(null);
  const [locationId, setLocationId] = useState("");
  // We can grab the id of the one food from the url params
  const { id } = useParams();

  // In the useEffect, we make an api call to get the one food and set it in local state
  useEffect(() => {
    const fetchItemItem = async () => {
      const itemData = await getOneItem(id);
      setItemItem(itemData);
    };
    fetchItemItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemItem = await addLocation(locationId, id);
    // I changed our response on the backend for this route.
    // instead of getting a list of just the flavors,
    // I grab the whole food object with it's flavors
    // This makes it easy to replace our state with the updated data.
    setItemItem(itemItem);
  };

  // this is the handleChange for the select drop down
  // since this form only has one value, we do not need a variable name for the key
  const handleChange = (e) => {
    const { value } = e.target;
    setLocationId(value);
  };

  const filterFN = (location) => {
    const idArr = itemItem.locations.map((loc) => loc.id); //array of ids
    return !idArr.includes(location.id); // should provide a t/f value
  };

  return (
    <div>
      <h3 className="username">{itemItem?.name}</h3>
      {itemItem?.locations.map((location) => (
        <p key={location.id}>{location.name}</p>
      ))}
      {/* below is our for for the flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select
          className="username"
          defaultValue="default"
          onChange={handleChange}
        >
          {/* we can set a default value to tell people to select a flavor*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value="default">
            -- Select a location --
          </option>
          {/* now we loop over all flavors and return an <option> tag for each */}
          {itemItem &&
            props.locations.filter(filterFN).map((location) => (
              // we track the flavor's id as the "value" which will get added to state onChange
              // the flavor's name goes between the open and close tag which is what the user sees
              <option value={location.id} key={location.id}>
                {location.name}
              </option>
            ))}
        </select>
        <button className="button">add</button>
      </form>
    </div>
  );
}
