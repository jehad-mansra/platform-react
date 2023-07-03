import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import Posts from "../components/Posts";


const Home = () => {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="headerContainer">
          <div className="slogan">
            <h1> Pedro's Pizzeria </h1>
            <p> PIZZA TO FIT ANY TASTE</p>
          </div>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
      <Posts />
    </>
  );
};

export default Home;
