//IMAGES
import dougImage from '../../assets/crew/image-douglas-hurley.png';
import markImage from '../../assets/crew/image-mark-shuttleworth.png';
import vicImage from '../../assets/crew/image-victor-glover.png';
import ansImage from '../../assets/crew/image-anousheh-ansari.png';

//CSS FILE
import "./crew.css";

//REACT IMPORTS
import { useState } from 'react';

//DATA
import data from '../../data.json';
const crewData = data.crew;
const dougData = crewData[0];
const markData = crewData[1];
const vicData =  crewData[2];
const ansData = crewData[3];

const Crew = () => {
  const [image, setImage] = useState(dougImage);
  const [name, setName] = useState(dougData.name);
  const [role, setRole] = useState(dougData.role);
  const [bio, setBio] = useState(dougData.bio);


  const displayDoug = () => {
    setImage(dougImage);
    setName(dougData.name);
    setRole(dougData.role);
    setBio(dougData.bio);
  }

  const displayMark = () => {
    setImage(markImage);
    setName(markData.name);
    setRole(markData.role);
    setBio(markData.bio);
  }

  const displayVic = () => {
    setImage(vicImage);
    setName(vicData.name);
    setRole(vicData.role);
    setBio(vicData.bio);
  }

  const displayAns = () => {
    setImage(ansImage);
    setName(ansData.name);
    setRole(ansData.role);
    setBio(ansData.bio);
  }


  return (
    <div className="crew">
      <div className="container">
      <div className="header">
      <h2 className="heading"> <span>02</span>MEET YOUR CREW </h2>
      </div>

      <div className="grid">
        <div className="left">
          <h2 className="title">{role}</h2>
          <h1 className="name">{name}</h1>
          <p>{bio}</p>
          <div className="dots">
            <div className={ name === dougData.name && "isActive"} onClick={displayDoug}></div>
            <div className={ name === markData.name && "isActive"} onClick={displayMark}></div>
            <div className={ name === vicData.name && "isActive"} onClick={displayVic}></div>
            <div className={ name === ansData.name && "isActive"} onClick={displayAns}></div>
          </div>
        </div>

        <div className="right">
            <div className="crew-image">
                <img src={image} alt={name} />
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Crew;
