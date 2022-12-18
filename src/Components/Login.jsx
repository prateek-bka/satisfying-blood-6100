import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");

  const handleClick = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      // console.log(name.current.value,email.current.value,password.current.value)
      navigate("/jobs");
    } else {
      alert("fill correct  details");
    }
  };

  return (
    <div className="maincontainer_login">
      <div className="container_login">
        <h1>Login </h1>
        <div className="input_space_login">
          <input type="email" placeholder="email" ref={email} />
        </div>
        <div className="input_space_login">
          <input type="password" placeholder="password" ref={password} />
        </div>
        <button onClick={handleClick}>Login</button>
        <br />
        <br />
        <p>
          {" "}
          <Link to="/signup">Sign Up</Link>, If you are a new user{" "}
        </p>
      </div>
    </div>
  );
}
export default Login;
