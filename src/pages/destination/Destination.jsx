//IMAGES
import moonImage from '../../assets/destination/image-moon.png';
import marsImage from '../../assets/destination/image-mars.png';
import europaImage from '../../assets/destination/image-europa.png';
import titanImage from '../../assets/destination/image-titan.png';

//CSS FILE
import "./destination.css";

//REACT & RRD IMPORTS
import { NavLink } from "react-router-dom";
import { useState } from "react";

//DATA
import data from '../../data.json';
const MoonData = data.destinations[0];
const MarsData = data.destinations[1];
const EuropaData = data.destinations[2];
const TitanData = data.destinations[3];



const Destination = () => {
  const [image, setImage] = useState(moonImage);
  const [name, setName] = useState(MoonData.name);
  const [description, setDescription] = useState(MoonData.description);
  const [distance, setDistance] = useState(MoonData.distance);
  const [travel, setTravel] = useState(MoonData.travel);

  const displayMoon = () => {
    setImage(moonImage);
    setName(MoonData.name);
    setDescription(MoonData.description);
    setDistance(MoonData.distance);
    setTravel(MoonData.travel);
  }

  const displayMars = () => {
    setImage(marsImage);
    setName(MarsData.name);
    setDescription(MarsData.description);
    setDistance(MarsData.distance);
    setTravel(MarsData.travel);
  }

  const displayEuropa = () => {
    setImage(europaImage);
    setName(EuropaData.name);
    setDescription(EuropaData.description);
    setDistance(EuropaData.distance);
    setTravel(EuropaData.travel);
  }

  const titanEuropa = () => {
    setImage(titanImage);
    setName(TitanData.name);
    setDescription(TitanData.description);
    setDistance(TitanData.distance);
    setTravel(TitanData.travel);
  }

  return (
    <div className="destination">
      <div className="container">
        <div className="header">
          <h2 className="heading">
            <span>01</span>PICK YOUR DESTINATION
          </h2>
        </div>

        <div className="grid">
          <div className="left">
            <img src={image} alt={name} />
          </div>

          <div className="right">
            <div className="destination-links">
              <NavLink onClick={displayMoon} className={`link ${name===MoonData.name && "isActive"}`}>
                MOON
              </NavLink>
              <NavLink onClick={displayMars} className={`link ${name===MarsData.name && "isActive"}`}>
                MARS
              </NavLink>
              <NavLink onClick={displayEuropa} className={`link ${name===EuropaData.name && "isActive"}`}>
                EUROPA
              </NavLink>
              <NavLink onClick={titanEuropa} className={`link ${name===TitanData.name && "isActive"}`}>
                TITAN
              </NavLink>
            </div>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="line"></div>
            <div className="destination-details">
              <div className="distance">
                <span>AVG. DISTANCE</span>
                <p>{distance}</p>
              </div>
              <div className="time">
                <span>EST. TRAVEL TIME</span>
                <p>{travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
