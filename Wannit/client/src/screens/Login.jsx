import { useState } from "react";
import { Link } from "react-router-dom";
// import Footer from '../components/Footer'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
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
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(formData);
        }}
      >
        <h3 className="username">Login</h3>
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

      <Link className="li" to="/register">
        Don't have an account? Register Here
      </Link>
    </div>
  );
}
