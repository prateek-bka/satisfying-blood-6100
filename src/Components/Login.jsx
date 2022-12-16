import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/dashboard");
    } else {
      alert("fill correct  details");
    }
  };

  return (
    <>
      <div className="container">
        <div className="input_space">
          <input type="email" placeholder="email" ref={email} />
        </div>
        <div className="input_space">
          <input type="password" placeholder="password" ref={password} />
        </div>
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
}
export default Login;
