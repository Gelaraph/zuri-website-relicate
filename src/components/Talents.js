import React from "react";
import styled from "styled-components";
import Line1 from "../assets/line1.svg";

const Talents = () => {
  return (
    <StyledSection>
      <h2>
        Skills of our <span>talents</span> that you will need
      </h2>

      <div className="talent-list">
        <div className="talent-grid">
          <ul>
            <li>UI/UX Designers</li>
            <li>Backend Developers</li>
            <li>DevOps Engineers</li>
            <li>Frontend Developers</li>
          </ul>
          <img src={Line1} alt="" />
        </div>

        <h3>Where our talents work</h3>

        <div className="second-talent-grid">
          <ul>
            <li>GitHub</li>
            <li>Microsoft</li>
            <li>Reskill Americans</li>
            <li>Flutterwave</li>
            <li>Google</li>
            <li>Career Transitioners</li>
          </ul>
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding-top: 100px;
  padding-left: 80px;
  padding-bottom: 70px;
  background-color: rgb(255,255,255);

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 49px;
    width: 40%;
    span {
      color: RGB(231, 51, 43);
    }
  }

  .talent-grid {
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 0.4fr;
    padding-bottom: 50px;
    width: 100%;
    img {
      height: 120px;
      max-width: 340px;
      margin-top: -100px;
     /* margin-left: 50px; */
    }
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
    }
  }
  .second-talent-grid {
    ul {
      display: grid;
      grid-template-columns: 0.5fr 0.6fr 1fr 0.6fr 0.5fr 1fr;
      align-items: center;
      column-gap: 10px;
      width: 72%;
    }
  }
  li{
        background-color: white;
        color: #787878;
        border-radius: 8px;
        box-shadow: 0 8px 30px hsla(0,0%,48%,.16);
        font-size: 18px;
        padding: 5px;
        font-weight: 400;
        text-align: center;
        list-style: none;
        letter-spacing: 0.00938em;
        transition: transform .3s ease,-webkit-transform .3s ease!important;
      }
      li:hover{
        transform: translateY(-15px)
      }
  .talent-list h3 {
      font-size: 40px;
      font-weight: 800;
      line-height: 49px;
      width: 40%;
      padding-bottom: 50px;
  }


  @media (max-width: 1000px) {
padding-left: 0;

h2{
  width: 80%;
  font-size: 25px;
  margin-left: auto;
  margin-right: auto;
  line-height: 35px;
}
.talent-grid {
display: block;

ul{
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
}
img{
  display: none;
}

.second-talent-grid{
  ul{
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
}

.talent-list h3{
  font-size: 25px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
  }
`;
export default Talents;
