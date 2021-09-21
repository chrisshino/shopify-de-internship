import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import {useForm} from "react-hook-form"

Modal.setAppElement("#root");

const Popup = ({ open, setOpen, user }) => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const {register, handleSubmit, formState: {errors}} = useForm()

  const submitForm = (data) => {
    const body = {
      
    }
  }

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);


  return (
    <Modal
      isOpen={open}
      onRequestClose={() => {
        setOpen(false);
        setImage(false);
        setPreview(false);
      }}
      style={{
        overlay: {
          backgroundColor: "#5e8e3e",
        },
      }}
    >
      <h2>Add Images</h2>
      <InnerWrapperForm method="post">
        {preview ? null : (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file && file.type.substr(0, 5) === "image") {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
          </div>
        )}
        <button
          onClick={() => {
            setOpen(false);
            setImage(false);
            setPreview(false);
          }}
          style={buttonStyle}
        >
          Close
        </button>
        {preview ? (
          <>
            <img
              alt="user"
              style={{ width: "250px", height: "250px" }}
              src={preview}
            />
            <LabelWrapper>
              <label>Add Title</label>
              <input type="text" />
            </LabelWrapper>
            <LabelWrapper>
              <label>Add Description</label>
              <input type="text"/>
            </LabelWrapper>
            <button style={buttonStyle}>Add to collection? </button>
          </>
        ) : null}
      </InnerWrapperForm>
    </Modal>
  );
};

const InnerWrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
`;

const buttonStyle = {
  border: "none",
  borderRadius: "5px",
  padding: "1rem 0.5rem",
  backgroundColor: "#5e8e3e",
  color: "white",
  fontSize: "1.2rem",
};

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
`;

export default Popup;
