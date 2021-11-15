import { useState } from "react";
import { onSignIn } from "../RequistLink/user.js";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const body = {
    email: email,
    password: password,
  };

  async function onSignInClicked() {
    const data = await onSignIn(body);
    setData(JSON.stringify(data));
  }

  return (
    <div>
      <h2>Sign In</h2>

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
      <button onClick={onSignInClicked}>Sign In</button>
      <div>{data}</div>
      <div>
        <h4>
          <Link to="/">Back to Home page</Link>
        </h4>
      </div>
    </div>
  );
}
export default SignIn;
