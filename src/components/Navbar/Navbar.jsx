import { useState } from "react";
import "./navbar.scss";
import { Link  } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState();

  const user = false;

  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="logo.png"></img>
          <span>LamaEstate</span>
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification"></div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="">SignIn</a>
            <a href="" className="register">
              SignUp
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" onClick={() => setOpen((prev) => !prev)}></img>
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">SignIn</a>
          <a href="">SignUp</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
