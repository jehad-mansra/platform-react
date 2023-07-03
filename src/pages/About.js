import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          At Pedro's Pizzeria , we believe in the art of crafting the perfect
          pizza. From hand-tossed dough to our homemade signature sauce, each
          element is carefully prepared to deliver a sensational culinary
          experience. Our dedicated team of talented chefs takes pride in
          creating delicious combinations of fresh toppings and premium cheeses,
          resulting in pizzas that are bursting with flavor. We are more than
          just a pizza place; we are a gathering spot for friends and families
          to enjoy delicious food in a warm and welcoming atmosphere. Whether
          you're dining in, ordering for takeout, or having our pizzas delivered
          to your doorstep, we strive to provide exceptional service that
          exceeds your expectations.
        </p>
      </div>
    </div>
  );
}

export default About;
