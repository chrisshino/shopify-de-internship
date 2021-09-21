import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [serverData, setServerData] = useState()

  const submitForm = (data) => {
    const body = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    if (data.password === data.confirm) {
      const requestOptions = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      };

      fetch("/auth/signup", requestOptions)
        .then((res) => res.json())
        .then((data) => setServerData(data.message))
        .catch((err) => console.log(err));
      reset();
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <SignupWrapper>
      <h2>Sign Up</h2>
      <FormWrapper>
        <UsernameWrapper>
          <label style={labelStyle} htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            placeholder="Your username"
            {...register("username", { required: true, maxLength: 25 })}
          ></input>
        </UsernameWrapper>
        {errors.username && (
          <span style={{ color: "red", fontSize: "12px" }}>
            Username is required
          </span>
        )}
        {errors.username?.type === "maxLength" && (
          <span style={{ color: "red", fontSize: "12px" }}>
            Max characters is 25
          </span>
        )}
        <EmailWrapper>
          <label style={labelStyle} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            placeholder="Your email"
            {...register("email", { required: true, maxLength: 80 })}
          ></input>
        </EmailWrapper>
        {errors.email && (
          <span style={{ color: "red", fontSize: "12px" }}>
            Email is required
          </span>
        )}
        <PasswordWrapper>
          <label style={labelStyle} htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            placeholder="Your password"
            {...register("password", { required: true, minLength: 5 })}
          ></input>
        </PasswordWrapper>
        {errors.password && (
          <span style={{ color: "red", fontSize: "12px" }}>
            Password is required
          </span>
        )}
        {errors.password?.type === "minLength" && (
          <span style={{ color: "red", fontSize: "12px" }}>
            Password must be atleast 5 characters long
          </span>
        )}
        <ConfirmPasswordWrapper>
          <label style={labelStyle} htmlFor="confirm">
            Confirm:
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirm", { required: true, minLength: 5 })}
          ></input>
        </ConfirmPasswordWrapper>
        {errors.confirm && (
          <span style={{ color: "red", fontSize: "12px" }}>
            Confirm is required
          </span>
        )}
        <SubmitButton type="submit" onClick={handleSubmit(submitForm)}>
          Sign-up
        </SubmitButton>
      </FormWrapper>

      <small>
        Already have an account? <Link to="/login">Log in</Link>
      </small>
    </SignupWrapper>
  );
};

const labelStyle = {
  textAlign: "left",
  width: "100px",
};

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  width: 20%;
  background-color: #95bf47;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  padding: 1rem;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const UsernameWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;

const EmailWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
`;

const PasswordWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
`;

const ConfirmPasswordWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
`;

const SubmitButton = styled.button`
  width: 75%;
  border-radius: 5px;
  color: white;
  background-color: #95bf47;
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  &:hover {
    background-color: #5e8e3e;
    cursor: pointer;
  }
`;

export default Signup;
