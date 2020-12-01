import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Locations from '../screens/Locations';
import ItemCreate from '../screens/ItemCreate';
import ItemDetail from '../screens/ItemDetail';
import ItemEdit from '../screens/ItemEdit';
import Items from '../screens/Items';
import { getAllLocations } from '../services/locations'
import { destroyItem, getAllItems, postItem, putItem } from '../services/items'

export default function MainContainer(props) {
  const [locations, setLocations] = useState([]);
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchLocations = async () => {
      const locationData = await getAllLocations();
      setLocations(locationData);
    }
    const fetchItems = async () => {
      const itemData = await getAllItems();
      setItems(itemData);
    }
    fetchLocations();
    fetchItems();
  }, [])

  const handleCreate = async (itemData) => {
    const newItem = await postItem(itemData);
    setItems(prevState => [...prevState, newItem]);
    history.push('/items');
  }

  const handleUpdate = async (id, itemData) => {
    const updatedItem = await putItem(id, itemData);
    setItems(prevState => prevState.map(item => {
      return item.id === Number(id) ? updatedItem : item
    }))
    history.push('/items');
  }

  const handleDelete = async (id) => {
    await destroyItem(id);
    setItems(prevState => prevState.filter(item => item.id !== id))
  }

  return (
    <Switch>
      <Route path='/locations'>
        <Locations locations={locations} />
      </Route>
      <Route path='/items/:id/edit'>
        <ItemEdit items={items} handleUpdate={handleUpdate} />
      </Route>
      <Route path='/items/new'>
        <ItemCreate handleCreate={handleCreate} />
      </Route>
      {/* Here, we're adding a route for our single food screen */}
      {/* we're passing it "flavors" to use in our drop down form */}
      <Route path='/items/:id'>
        <ItemDetail locations={locations} />
      </Route>
      <Route path='/items'>
        <Items
          items={items}
          handleDelete={handleDelete}
          currentUser={props.currentUser}
        />
      </Route>
    </Switch>
  )
}
