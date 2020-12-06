import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Locations from "../screens/Locations";
import LocationEdit from "../screens/LocationEdit";
import LocationCreate from "../screens/LocationCreate";
import ItemCreate from "../screens/ItemCreate";
import ItemDetail from "../screens/ItemDetail";
import ItemEdit from "../screens/ItemEdit";
import Items from "../screens/Items";
import {
  getAllLocations,
  postLocation,
  putLocation,
  destroyLocation,
} from "../services/locations";
import { destroyItem, getAllItems, postItem, putItem } from "../services/items";
import Homepage from "../screens/Homepage";
import tilebackground from "../assets/tilebackground.png";

export default function MainContainer(props) {
  const [locations, setLocations] = useState([]);
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchLocations = async () => {
      const locationData = await getAllLocations();
      setLocations(locationData);
    };
    const fetchItems = async () => {
      const itemData = await getAllItems();
      setItems(itemData);
    };
    fetchLocations();
    fetchItems();
  }, []);

  const handleCreate = async (itemData) => {
    const newItem = await postItem(itemData);
    setItems((prevState) => [...prevState, newItem]);
    history.push("/items");
  };

  const handleLocationCreate = async (locationData) => {
    const newLocation = await postLocation(locationData);
    setLocations((prevState) => [...prevState, newLocation]);
    history.push("/locations");
  };

  const handleUpdate = async (id, itemData) => {
    const updatedItem = await putItem(id, itemData);
    setItems((prevState) =>
      prevState.map((item) => {
        return item.id === Number(id) ? updatedItem : item;
      })
    );
    history.push("/items");
  };

  const handleUpdateLocation = async (id, locationData) => {
    const updatedLocation = await putLocation(id, locationData);
    setLocations((prevState) =>
      prevState.map((location) => {
        return location.id === Number(id) ? updatedLocation : location;
      })
    );
    history.push("/locations");
  };

  const handleDelete = async (id) => {
    await destroyItem(id);
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleDeleteLocation = async (id) => {
    await destroyLocation(id);
    setLocations((prevState) =>
      prevState.filter((location) => location.id !== id)
    );
  };

  let backgroundImage = {
    backgroundImage: `url(${tilebackground})`,
    backgroundSize: "cover",
    border: "solid 2px 2px 0px 2px blue",
  };

  return (
    <div className="divbody" style={backgroundImage}>
      <Switch>
        <Route path="/items/:id/edit">
          <ItemEdit items={items} handleUpdate={handleUpdate} />
        </Route>

        <Route path="/items/new">
          <ItemCreate handleCreate={handleCreate} />
        </Route>
        {/* Here, we're adding a route for our single item screen */}
        {/* we're passing it "locations" to use in our drop down form */}
        <Route path="/items/:id">
          <ItemDetail locations={locations} />
        </Route>

        <Route path="/locations/new">
          <LocationCreate handleCreate={handleLocationCreate} />
        </Route>

        <Route path="/locations/:id/edit">
          <LocationEdit
            locations={locations}
            handleUpdate={handleUpdateLocation}
          />
        </Route>

        <Route path="/locations">
          <Locations
            locations={locations}
            handleDeleteLocation={handleDeleteLocation}
            currentUser={props.currentUser}
          />
        </Route>

        <Route path="/items">
          <Items
            items={items}
            handleDelete={handleDelete}
            currentUser={props.currentUser}
          />
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
   
    </div>
  );
}
