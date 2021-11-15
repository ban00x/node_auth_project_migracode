import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>Home Components</h2>
      <h4>
        <button className="homeButton">
          <Link to="/sign-up">Sign Up</Link>
        </button>
      </h4>
      <h4>
        <button className="homeButton">
          <Link to="/sign-in">Sign In</Link>
        </button>
      </h4>
    </div>
  );
}
export default Home;
