import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup"

const CreateImages = ({ user }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      {user ? (
        <div></div>
      ) : (
        <ImagePageWrapper>
          <HeaderWrapper>
            <WelcomeWrapper>Welcome Chris!</WelcomeWrapper>

            <AddImageButton onClick={() => setOpen(true)}>Add Image!</AddImageButton>
          </HeaderWrapper>
          <Popup open={open} setOpen={setOpen} user={user}/>
        </ImagePageWrapper>
      )}
    </>
  );
};

const ImagePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 20%;
  background-color: #95bf47;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  color: white;
`;

const WelcomeWrapper = styled.div`
  font-size: 2rem;
  width: 30%;
`;

const AddImageButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 1rem 0.5rem;
  background-color: #5e8e3e;
  color: white;
  font-size: 1.5rem;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
`;

export default CreateImages;
