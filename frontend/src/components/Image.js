import React from "react";
import styled from "styled-components";

const Image = ({ data }) => {
  return (
    <ImageContainer>
      <img
        alt="good stuff"
        src={data.image}
        style={{ objectFit: "cover", width: "150px", height: "150px", borderRadius:"5px" }}
      />
      <p>{data.title}</p>
      <p>{data.description}</p>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: column;
  border-radius: 5px;
  width: 200px;
  max-width: auto;
  height: 300px;
  max-height: auto;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  background-color: #5e8e3e;
  color: white;
`;

export default Image;
