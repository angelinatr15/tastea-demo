import { Link } from "react-router-dom";
import classes from "./MainNavi.module.css";

function MainNavi() {
  return (
    <header className={classes.header}>
      <h1>Tastea</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="menu">Menu</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavi;
