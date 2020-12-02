import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function LocationEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const locationLocation = props.locations.find(location => location.id === Number(id));
      setFormData({
        name: locationLocation.name
      })
    }
    if (props.locations.length){
      prefillForm();
    }
  }, [props.locations])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleUpdate(id, formData);
    }}>
      <h3>Edit Item</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
