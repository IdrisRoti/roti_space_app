//CSS FILE
import './technology.css';

//IMAGES IMPORT
import vehicleImage from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import portImage from '../../assets/technology/image-spaceport-portrait.jpg';
import capsuleImage from '../../assets/technology/image-space-capsule-portrait.jpg';


//REACT IMPORTS
import { NavLink } from "react-router-dom";
import { useState } from 'react';

//DATA
import data from '../../data.json';
const techData = data.technology;
const vehicleData = techData[0];
const portData = techData[1];
const capsuleData = techData[2];



const Technology = () => {

  const [image, setImage] = useState(vehicleImage);
  const [name, setName] = useState(vehicleData.name);
  const [description, setDescription] = useState(vehicleData.description);


  const displayVehicle = ()=> {
    setImage(vehicleImage);
    setName(vehicleData.name);
    setDescription(vehicleData.description);
  }

  const displayPort = ()=> {
    setImage(portImage);
    setName(portData.name);
    setDescription(portData.description);
  }

  const displayCapsule = ()=> {
    setImage(capsuleImage);
    setName(capsuleData.name);
    setDescription(capsuleData.description);
  }


  return (
    <div className="technology">
      <div className="container">
        <h2 className="heading"><span>04</span>SPACE LAUNCH 101</h2>
        <div className="grid">
          <div className="left">
            <div className="tech-links">
              <NavLink onClick={displayVehicle} className={`link ${name===vehicleData.name && "isActive"}`}>1</NavLink>
              <NavLink onClick={displayPort} className={`link ${name===portData.name && "isActive"}`}>2</NavLink>
              <NavLink onClick={displayCapsule} className={`link ${name===capsuleData.name && "isActive"}`}>3</NavLink>
            </div>
            <div className="details">
              <h3>THE TERMINOLOGY...</h3>
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>

          <div className="right">
            <div className="tech-image">
              <img src={image} alt={name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
