import Logo from "../assets/pizzaLogo.png";
import "../styles/Navbar.css";
import { Route, Routes, Link } from "react-router-dom";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Home from "../pages/Home";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";
import Posts from "./Posts";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  // Function to toggle the visibility of navigation links
  const toggleNav = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <>
      <div className="navbar" >
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} />
          <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/About">About Us</Link>
            <Link to='/Reviews'>Reviews</Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/About">About Us</Link>
          <Link to='/Reviews'>Reviews</Link>
          <button onClick={toggleNav}>
            <ReorderIcon />
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path='/Reviews' element={<Posts/>}></Route>
      </Routes>
    </>
  );
};

export default Navbar;
