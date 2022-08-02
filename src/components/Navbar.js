import React from "react";
import Logo from "../assets/logo1.svg";
import styled from 'styled-components'

const Navbar = () => {
  return (
    <StyledDiv>
 <nav>
        <img src={Logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Impact</li>
            <li>Why us</li>
            <button>Hire talents</button>
        </ul>
      </nav>
    </StyledDiv>
     
  );
};


const StyledDiv = styled.section`
width: 80%;
margin-left: auto;
margin-right: auto;
nav{
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 10px;
    position: fixed;
    z-index: 1100;
    top: 0;
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
`;
export default Navbar;
