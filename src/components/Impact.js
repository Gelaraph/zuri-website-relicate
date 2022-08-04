import React from "react";
import styled from "styled-components";
import Germany from "../assets/GER.svg";
import England from "../assets/ENG.svg";
import India from "../assets/ind.svg";
import Nigeria from "../assets/NIG.svg";
import USA from "../assets/ussa.svg";
import Section2 from "../assets/section2.png";

const Impact = () => {
  return (
    <StyledSection>
      <div className="section-text">
        <h2>
          We have impacted the lives of <span>thousands</span> around the world
        </h2>
        <p>6,000 trained in 14 months</p>
        <p className="talent">Talent Placed in 5 countries</p>

        <div className="country">
          <img src={Germany} alt="" />
          <img src={England} alt="" />
          <img src={India} alt="" />
          <img src={Nigeria} alt="" />
          <img src={USA} alt="" />
        </div>
      </div>

      <div className="img-div">
        <img src={Section2} alt="" />
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background-color: rgb(253, 243, 242);
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  padding-top: 80px;
  padding-left: 20px;
  padding-bottom: 150px;

  .section-text {
    width: 85%;
    padding-top: 40px;
    /* background-color: red; */
    justify-self: center;

    h2 {
      padding-bottom: 10px;
      font-size: 40px;
      letter-spacing: 0.3752px;
      font-weight: 600px;
      text-align: start;
      line-height: 49px;
      width: 95%;
    }

    p {
      letter-spacing: 0.00938em;
      font-size: 19px;
      line-height: 22px;
      font-weight: bold;
      padding-top: 10px;
    }

    .talent {
      color: #787878;
      font-weight: 400;
    }
    .country {
      padding-top: 20px;
      /* background-color: blue; */
      margin-left: -5px;

      & > img {
        background-color: white;
        padding: 3px;
        padding-top: 15px;
        border-radius: 5px;
        margin: 10px;
        width: 60px;
        height: 60px;
      }
    }
  }

  span {
    color: RGB(231, 51, 43);
  }
  .img-div {
    text-align: center;
  }
  .img-div img {
    width: 60%;
  }

  @media (max-width: 1000px) {
display: block;
padding-left: 0px;


.section-text{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  /* background-color: blue; */
 
  
  h2{
    font-size: 25px;
    line-height: 35px;
  }
  p{
    font-size: 16px;
  }
}

.img-div img{
  width: 85%;
}
  }

`;
export default Impact;
