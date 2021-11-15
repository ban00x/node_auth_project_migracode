import { useState } from "react";
import { onSignUp } from "../RequistLink/user.js";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const body = {
    name: name,
    email: email,
    password: password,
  };

  async function onSignUpClicked() {
    const data = await onSignUp(body);
    setData(JSON.stringify(data));
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <input
          className="signUpForm"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <input
          className="signUpForm"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <input
          className="signUpForm"
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button onClick={onSignUpClicked}>Sign Up</button>
      <div>{data}</div>
      <div>
        <h4>
          <Link to="/">Back to Home page</Link>
        </h4>
      </div>
    </div>
  );
}
export default SignUp;
