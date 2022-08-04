import React from "react";
import styled from "styled-components";
import People from "../assets/people.svg";
import Mech from "../assets/mech.svg";
import Hand from "../assets/hand.svg";
import Write from "../assets/write.svg";
import Many from "../assets/many.svg";

const Hire = () => {
  return (
    <StyledDiv>
      <h2>Why Hire our <span>Talents</span></h2>

      <div className="card-div">
        <div className="card">
          <img src={People} alt="" />
          <p>
            Zuri Team has a highly skilled set of talents that are built on
            referral and successful partnerships.
          </p>
        </div>
        <div className="card">
          <img src={Mech} alt="" />
          <p>
            Our recruiters are exceptionally skilled in identifying top talent
            around the globe and matching them with the client's needs.
          </p>
        </div>
        <div className="card">
          <img src={Hand} alt="" />
          <p>
            We have an 85% fill ratio for every open position we partner for.
          </p>
        </div>
      </div>

      <div className="card-div2">
        <div className="card">
          <img src={Write} alt="" />
          <p>Contract renewal rate for our consultant is 90 percent.</p>
        </div>
        <div className="card last-card">
          <img src={Many} alt="" />
          <p>60% of our consultants are converted to full-time employees.</p>
        </div>
      </div>

      <div className="btn-div">
        <button>Hire Talent</button>
        <button className="gray-btn">Join Talent pool</button>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.section`
  background-color: rgb(253, 243, 242);
  padding-top: 80px;
  padding-bottom: 100px;

  h2 {
    letter-spacing: 0.00938em;
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    line-height: 49px;
    padding-bottom: 50px;
    span {
    color: RGB(231, 51, 43);
  }
  }
  .card-div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
  .card {
    width: 370px;
    height: 290px;
    justify-self: center;
    background-color: #fff;
    border-radius: 0 0 16px 0;
    color: #787878;
    text-align: center;
    padding: 45px 10px;

    :hover {
      background-color: #161617;
      border-radius: 0 0 16px 0;
      box-shadow: 0 8px 30px hsl(0deg 0% 69% / 7%);
      color: #fff;
      padding-bottom: 45px;
      padding-top: 45px;
    }
  }

  .card-div2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    margin-top: 30px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    /* background-color: red; */
  }

  p{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
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

  @media (max-width: 1000px) {
h2{
  font-size: 25px;
}

.card-div{
  grid-template-columns: repeat(1, 1fr);
row-gap: 20px;
margin-left: 20px;
}

.card-div2{
  grid-template-columns: repeat(1, 1fr);
  margin-left: 65px;
  row-gap: 20px;

}

.btn-div{
  width: 70%;
}
  }
`;
export default Hire;
