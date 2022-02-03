import { useNavigate } from 'react-router-dom';

// Alternative Approach: Use controlled components, instead of uncontrolled forms
// Not done here because the form is extremely simple
function Login() {
  const navigate = useNavigate();

  // For Production: Add authentication mechanism
  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username: </label>
        <input id="username" name="username" type="text" required />
        <br />
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" type="password" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login;
