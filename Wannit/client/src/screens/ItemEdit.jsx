import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const itemItem = props.items.find(item => item.id === Number(id));
      setFormData({
        name: itemItem.name
      })
    }
    if (props.items.length){
      prefillForm();
    }
  }, [props.foods])

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