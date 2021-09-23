import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { login } from "../auth";

const Login = ({ setUser, user }) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginUser = (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("/auth/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          login(data.access_token);
          setUser({ user_Id: data.user_id, username: data.username });
          history.push("/images");
          localStorage.setItem("user", data.username)
        }
        else {
          throw new Error()
        }
      })
      .catch((err) => console.log(err));

    reset();
  };

  return (
    <SignupWrapper>
      <h2>Log In</h2>
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
            Username should be less than 25 characters
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
            Username should be more than 5 characters
          </span>
        )}

        <SubmitButton type="submit" onClick={handleSubmit(loginUser)}>
          Log In
        </SubmitButton>
      </FormWrapper>
      <small>
        Don't have an account? <Link to="/signup">Sign up</Link>
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

const PasswordWrapper = styled.div`
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

export default Login;
