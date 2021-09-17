from configparser import ConfigParser
from sqlalchemy import create_engine, exc
import os

def read_config():
  current_dir = os.path.dirname(__file__)
  file_path = os.path.join(current_dir, '../config.ini')
  config = ConfigParser()
  config.read(file_path)
  return config

def connection_uri():
    '''
        Creating connection URI for connecting to PSQL DB. URI will
        be used to create SQLAlchemy engine for executing queries.
        :return: URI for our PSQL DB hosted in GCP SQL
    '''
    config = read_config()

    URI = 'postgresql+psycopg2://{}:{}@/{}?host={}'.format(
        config['image_database']['user'],
        config['image_database']['password'],
        config['image_database']['dbname'],
        config['image_database']['host']
    )

    return URI

def create_user_table():
    URI = connection_uri()
    TABLE_NAME = "users"

    CREATE_TABLE_QUERY = """
                 CREATE TABLE IF NOT EXISTS {} (
                    user_id serial PRIMARY KEY,
	                username VARCHAR ( 50 ) UNIQUE NOT NULL,
                    password VARCHAR ( 50 ) NOT NULL,
                    email VARCHAR ( 255 ) UNIQUE NOT NULL
                )""".format(TABLE_NAME)
    try:
        engine = create_engine(URI, echo=False)
        my_connection = engine.connect()
        my_connection.execute(CREATE_TABLE_QUERY)

        return "Table create successfully"

    except exc.SQLAlchemyError as error:
        return 'Error trying to create table: {}'.format(error)
    
    finally:
        my_connection.close()
        engine.dispose()

def add_image(image):
    # TODO: add the gcs stuff here, upload to gcs then the return link will be referenced into the database :)
    # a cool feature would be to allow this to accept multi / bulk images 
    # another thing to do would be add a resizer, so when the user get requests an image they can see multiple sizes!

    URI = connection_uri()
    my_connection = None

    try: 
        engine = create_engine(URI, echo=True)
        my_connection = engine.connect()

    except exc.SQLAlchemyError as err:
        return 'Error occured inserting into table {}. Exception: {}'.format("images", err)

    finally:
        my_connection.close()
        engine.dispose()

def delete_image(image):
    # TODO: I guess i'll need to delete the image first from gcs, and then also remove the row from the db.

    URI = connection_uri()
    my_connection = None

    try: 
        engine = create_engine(URI, echo=True)
        my_connection = engine.connect()

    except exc.SQLAlchemyError as err:
        return 'Error occured deleting image from table {}. Exception: {}'.format("images", err)

    finally:
        my_connection.close()
        engine.dispose()

def get_images(user):
    # This will take a user that is currently logged in, and then search the db for all images and return the url's as links :0

    URI = connection_uri()
    my_connection = None

    try: 
        engine = create_engine(URI, echo=True)
        my_connection = engine.connect()

    except exc.SQLAlchemyError as err:
        return 'Error occured getting image from table {}. Exception: {}'.format("images", err)

    finally:
        my_connection.close()
        engine.dispose()