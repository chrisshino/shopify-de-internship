import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Popup from "./Popup";
import Image from "./Image";

const CreateImages = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState(null);
  if (user == null) {
    user = localStorage.getItem("user");
  }
  console.log(images);

  useEffect(() => {
    if (user) {
      const token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");
      const requestOptions = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      };
      fetch("34.68.61.159:8080/api/images/images", requestOptions)
        .then((res) => res.json())
        .then((data) => setImages(data))
        .catch((err) => console.log(err));
    } else {
      return null;
    }
  }, [user]);

  return (
    <>
      {user ? (
        <ImagePageWrapper>
          <HeaderWrapper>
            <WelcomeWrapper>Welcome Chris!</WelcomeWrapper>

            <AddImageButton onClick={() => setOpen(true)}>
              Add Image!
            </AddImageButton>
          </HeaderWrapper>
          <ImagesWrapper>
            {images ? (
              images.map((image, i) => {
                return <Image key={i} data={image} />;
              })
            ) : (
              <div>Looks like you don't have any images yet?</div>
            )}
          </ImagesWrapper>
          <Popup open={open} setOpen={setOpen} user={user} />
        </ImagePageWrapper>
      ) : (
        <div>Please login to see and upload images :)</div>
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

const ImagesWrapper = styled.div`
  display: flex;
  overflow-y: auto;
  width: 60%;
  height: 60%;
  margin-top: 15%;
  margin-left: 10%;
  margin-right: 10%;
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
