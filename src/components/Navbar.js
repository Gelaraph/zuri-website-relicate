import React from "react";
import Logo from "../assets/logo1.svg";
import styled from 'styled-components'

const Navbar = () => {
  return (
    <StyledDiv>
 <nav>
        <div>
        <img src={Logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Impact</li>
            <li>Why us</li>
        </ul>
        <button>Hire talents</button>
        </div>
      </nav>
    </StyledDiv>
     
  );
};


const StyledDiv = styled.section`
width: 100%;
margin-left: auto;
margin-right: auto;
background-color: white;
nav{
    width: 100%;
    padding-top: 10px;
    position: fixed;
    z-index: 1100;
    top: 0;
    background-color: white;
    padding-bottom: 20px;
    div{
      width: 80%;
      display: grid;
    grid-template-columns: 1.2fr 1fr 0.5fr;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    }
}
img{
    max-width: 120px;
    max-height: 22px;
}
ul{
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
}
button{
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
    min-width: 64px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;;
    background-color: #e7332b;
    border-radius: 0 0 8px;
    color: #ffffff;
    font-weight: 400;
    line-height: 19px;
    max-width: 1440px;
    height: 35px;
    font-size: 0.875rem;
}

@media (max-width: 1000px) {
nav{
  div{
    grid-template-columns: 1fr 1fr;
  }
  ul{
    display: none;
  }
  button{
    justify-self: end;
    width: 140px;
  }
}
}
`;
export default Navbar;
