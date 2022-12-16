import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const localSignup = localStorage.getItem("signup");

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      // console.log(name.current.value,email.current.value,password.current.value)
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signup", email.current.value);
      alert("Account created");

      navigate("/login");
    } else {
      alert("fill all the details");
    }
  };
  return (
    <>
      <div className="container">
        <div className="input_space">
          <input type="text" placeholder="name" ref={name} />
        </div>
        <div className="input_space">
          <input type="email" placeholder="email" ref={email} />
        </div>
        <div className="input_space">
          <input type="password" placeholder="password" ref={password} />
        </div>
        <button onClick={handleClick}>Sign up</button>
      </div>
    </>
  );
}
export default Signup;
