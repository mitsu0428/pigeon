import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterComponents>pigeon</FooterComponents>;
}

export default Footer;

const FooterComponents = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 50px;
  font-size: 16px;
  z-index: 100;
`;
