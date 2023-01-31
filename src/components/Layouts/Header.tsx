import React from "react";
import Image from "next/image";
import styled from "styled-components";

function Header() {
  return (
    <LogoArea>
      <Image src="/images/logo.png" width={75} height={75} alt="logo" />
    </LogoArea>
  );
}

export default Header;

// ロゴを左上に固定配置
const LogoArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  margin-top: 16px;
  margin-left: 16px;
`;
