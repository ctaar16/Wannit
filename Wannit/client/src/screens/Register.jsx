import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="reg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleRegister(formData);
        }}
      >
        <h3 className="username">Register</h3>

        <br />
        <input
          className="input"
          placeholder="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <br />

        <input
          className="input"
          placeholder="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />

        <input
          className="input"
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />

        <div>
          <button className="button">Submit</button>
        </div>
      </form>

      <Link className="li" to="/login">
        Already have an account? Login Here!
      </Link>
    </div>
  );
}
