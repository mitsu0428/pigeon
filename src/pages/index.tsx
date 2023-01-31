import Head from "next/head";
import React from "react";
import styled from "styled-components";
import UploadPage from "./components/upload/UploadPage";
import { useAuth } from "@/pages/components/libs/AuthContext";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";

const Home = () => {
  const { currentUser, login, logout } = useAuth();

  return (
    <Container>
      <Main>
        {!currentUser && <CustomButton onClick={login}>ログイン</CustomButton>}
        {currentUser && (
          <>
            <AuthArea>
              <CustomText>{currentUser.email} でログイン中</CustomText>
              <CustomButton onClick={logout}>ログアウト</CustomButton>
            </AuthArea>
            <UploadPage />
          </>
        )}
      </Main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("/images/background.jpg");
  background-size: cover;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AuthArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CustomText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const CustomButton = styled.button`
  width: 300px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
