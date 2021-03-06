import { useState } from "react";

export default function LocationCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
  });

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
        props.handleCreate(formData);
      }}
    >
      <h3 className="username">Create Location</h3>
      <label className="username">
        Name:
        <input
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
