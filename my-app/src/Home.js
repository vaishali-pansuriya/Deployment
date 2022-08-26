import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="About">Click to view our about page</Link>
      <Link to="Contact">Click to view our contact page</Link>
    </div>
  );
}
export default Home;
