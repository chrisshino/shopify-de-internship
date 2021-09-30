import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

const Popup = ({ open, setOpen, user }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  
  const body = {
    image: preview ? preview.split(",")[1] : null,
    title: title,
    description: description,
    owner_id: parseInt(user.user_Id)
  };

  const submitHandler = (data) => {
    const token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");

    if ((image, preview, title, description)) {
      const requestOptions = {
        method: "POST",
        mode: 'cors',
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
        body: JSON.stringify(data),
      };
      fetch("34.123.73.156:8080/api/images/images", requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      alert("Please fill in all the fields :)");
    }
  };

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
      <InnerWrapperForm>
        {preview ? null : (
          <div>
            <input
              type="file"
              accept="image/jpeg"
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
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </LabelWrapper>
            <LabelWrapper>
              <label>Add Description</label>
              <input
                type="text"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </LabelWrapper>
            <button
              style={buttonStyle}
              onClick={() => {
                submitHandler(body);
              }}
            >
              Add to collection?{" "}
            </button>
          </>
        ) : null}
      </InnerWrapperForm>
    </Modal>
  );
};

const InnerWrapperForm = styled.div`
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
