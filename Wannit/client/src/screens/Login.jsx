import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className = "login">
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h3 className = "username">Login</h3>
      <label className = "username">Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className = "username">Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
          <button className = "button">Submit</button>
      </label>
      <br />
      <Link className = "li" to='/register'>Don't have an account? Register Here</Link>
      
    </form>
    </div>
  )
}
