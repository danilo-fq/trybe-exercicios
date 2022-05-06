import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Pokemon.css";

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <section className='Card-Container'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {averageWeight.value}
            {averageWeight.measurementUnit}
          </p>
        </div>
        <img src={image} alt={`${name} ${type}`}/>
      </section>
    );

    
  }
}

export default Pokemon;
