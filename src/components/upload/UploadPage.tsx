import React, { useState } from "react";
import styled from "styled-components";
import storage from "@/components/libs/firebase";
import { ref, uploadBytes } from "firebase/storage";

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      const storageRef = ref(storage, file.name);
      await uploadBytes(storageRef, file);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="file" onChange={onChange} />
      <Button type="submit">Upload</Button>
    </Form>
  );
};

export default UploadPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 50px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
`;
