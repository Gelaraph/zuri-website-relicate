import React from "react";
import thick2 from "../assets/thick2.svg";
import styled from "styled-components";
import HeroImg from "../assets/section1.png";

const Hero = () => {
  return (
    <StyledDiv>
      <div className="hero-text">
        <h1>
          Vetted and Trusted <span>talents</span>
        </h1>
        <div className="thick-img">
          <img src={thick2} alt="" />
        </div>

        <p>
          At Zuri Team, we train, test and place talent in various industries.
          We have access to the best pool of skills in the tech Industry.
        </p>

        <div className="btn-div">
          <button>Hire Talent</button>
          <button className="gray-btn">Join Talent pool</button>
        </div>
      </div>

      <div className="heroImg-div">
        <img src={HeroImg} alt="hero-img" className="hero-img" />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  padding-top: 200px;
  padding-bottom: 80px;


  .heroImg-div {
    width: 65%;
    margin-left: 100px;
  }
  .hero-img {
    width: 380px;
    height: 450px;
    margin-right: auto;
  }
  .hero-text {
    align-self: center;
    text-align: center;
    h1 {
      font-size: 40px;
      font-weight: 800;
      text-align: center;
      span {
        color: RGB(231, 51, 43);
      }
    }
    .thick-img{
        text-align: end;
        margin-top: -30px;
    }
    p {
      width: 65%;
      text-align: justify;
      margin-left: 70px;
      color: RGB(120, 120, 120);
      font-size: 16px;
      font-weight: 400;
    }

    .btn-div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 20px;
      width: 68%;
      margin-left: 60px;
    }
    button {
      text-align: center;
      width: 90%;
      outline: none;
      border: none;
      cursor: pointer;
      min-width: 64px;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      background-color: #e7332b;
      border-radius: 0 0 8px;
      color: #ffffff;
      font-weight: 400;
      line-height: 19px;
      height: 35px;
      font-size: 0.875rem;
      align-self: center;
      justify-self: center;
    }
    .gray-btn {
      background-color: #585858;
    }
  }

 

  @media (max-width: 1000px) {
display: block;
padding-top: 120px;

.hero-text{

p{
  font-size: 14px;
}
}

.heroImg-div{
  margin-top: 50px;
}

.hero-img{
    margin-left: -30px;
  }
  

  .thick-img{
        text-align: end;
        margin-right: 130px;
    }


}
`;

export default Hero;
