import React from "react";
import styled from "styled-components";


const Home = () => {
  return (
    <HomeWrapper>
      <h1>
        Hello Shopify Recruiter!
      </h1>
      <h3>
        Thanks for taking a look at my internship
        submission for the 2022 Winter Data Engineering opportunity.
      </h3>
      <p>
        This app uses quite a few technologies: React, Flask, Google cloud storage, Google Cloudsql (postgres), and is even deployed using a microservice architecture (Docker and Kubernetes (GKE))
      </p>
      <p>
        To use the app, simply sign up, then once signed up, go the Login route to access your JWT token and get access to the Images route. 
      </p>
      <p>
        On the Images route you will be able to add images to your profile, and delete images that you choose!
      </p>
    </HomeWrapper>
  );
};

  const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 50%;
    background-color: #95bf47;
    border-radius: 5px;
    color: white;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: left;
  `;

export default Home;
