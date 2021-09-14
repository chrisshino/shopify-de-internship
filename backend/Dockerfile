# this seems to be a very popular base image for flask apps
FROM tiangolo/uwsgi-nginx-flask:python3.6

# copy over our requirements.txt file
COPY requirements.txt /tmp/

# upgrade pip and install required python packages
RUN pip install -U pip
RUN pip install -r /tmp/requirements.txt

# copy over our app code
COPY ./app /app