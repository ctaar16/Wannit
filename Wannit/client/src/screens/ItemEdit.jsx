import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const itemItem = props.items.find((item) => item.id === Number(id));
      setFormData({
        name: itemItem.name,
      });
    };
    if (props.items.length) {
      prefillForm();
    }
  }, [props.items]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleUpdate(id, formData);
      }}
    >
      <h3 className="username">Edit Item</h3>
      <label className="username">
        Name:
        <input
          className="box"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button className="button">Submit</button>
    </form>
  );
}
