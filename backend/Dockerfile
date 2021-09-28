# using base image
FROM python:3.7

# setting working dir inside container
WORKDIR /backend

# adding in all contents from backend folder
ADD . .

# installing flask requirements

RUN pip install -r requirements.txt


# exposing port 8000 on container
EXPOSE 8000

# serving flask backend through uWSGI server
CMD [ "python", "run.py" ]