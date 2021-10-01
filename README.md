# Shopify Data Engineering Internship Project 2022 Winter

Hello and welcome to my internship app project, this application uses the following technologies:

  * React (Javascript)
  * Flask (Python)
  * GCP services
    * Cloudsql (Postgres)
    * GCS (google cloud storage for images)
    * GKE (Kubernetes)
  * Docker
  * And a bunch of other libraries, including JWT / login and auth system from scratch!
  
#### Note: The app is currently not live, because I don't want to incur charges from kubernetes and my cloud services :)

# Landing Page

### A very basic landing page, with a sign-up, login, and home route.

<img width="1246" alt="Screen Shot 2021-09-23 at 7 12 12 PM" src="https://user-images.githubusercontent.com/47957189/135555952-09ad17d3-9259-4f7f-a04f-7dea211fe1bd.png">

# Sign-up & Login

### Login looks like this:

<img width="471" alt="Screen Shot 2021-09-23 at 7 12 20 PM" src="https://user-images.githubusercontent.com/47957189/135556120-1f9a6766-a5ce-43da-9ecc-e1d0bc3a6d3a.png">

### Sign-up information is saved to postgres in cloudsql, here is what the table schema looks like for user data (TablePlus).

<img width="994" alt="Screen Shot 2021-09-23 at 7 13 55 PM" src="https://user-images.githubusercontent.com/47957189/135556187-7567f36e-79e7-4e2e-ad63-b325728c6589.png">

# Getting all your images

### There is a react useeffect hook that will refresh the ui of the signed in user to GET all images for that user's ID.

<img width="1275" alt="Screen Shot 2021-09-23 at 7 12 34 PM" src="https://user-images.githubusercontent.com/47957189/135556150-357e1129-7e2f-4b4f-8553-fa2eb1adaa25.png">

(Ash is my girlfriend, I am not a creep)

# Adding Images

### After clicking on add image this pop up comes up and expects an image, title, and description.

<img width="1324" alt="Screen Shot 2021-09-23 at 7 13 13 PM" src="https://user-images.githubusercontent.com/47957189/135556137-f4808daf-2ade-415b-9d9c-b9946e59f5e8.png">

# Google cloud storage

### I thought it was really important to save the images to gcs and then take the url and save that in the database, instead of the full image itself.

![Screen Shot 2021-09-23 at 7 13 37 PM](https://user-images.githubusercontent.com/47957189/135556182-3fb88926-3106-43a4-9eee-b63d5e524958.png)

(I made this public for speed of development purposes)

# Docker and GKE deployment 

### I wanted to flex my deployment skills a bit as I have been learning docker and kubernetes over the last few weeks!
### This part was challenging but very rewarding, also making nginx work with this was tough but a good experience!

<img width="975" alt="Screen Shot 2021-09-29 at 8 17 19 PM" src="https://user-images.githubusercontent.com/47957189/135556202-bd02d276-9e45-4e06-9178-10ac446dd041.png">

# Thanks for checking it out, I'd love to talk about the code anytime :)
