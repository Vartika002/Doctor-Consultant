import React from "react";
import CradOneImg from "../Assests/Card1.png";
import CradTwoImg from "../Assests/Card2.png";
import CradThreeImg from "../Assests/Card3.png";
import CradFourImg from "../Assests/Card4.png";
const Card = () => {
  return (
    <div className="card-container">
      <img src={CradOneImg} alt="Image1" />
      <img src={CradTwoImg} alt="Image2" />
      <img src={CradThreeImg} alt="Image3" />
      <img src={CradFourImg} alt="Image4" />
    </div>
  );
};

export default Card;
