from backend.main import create_app
from backend.config import DevConfig

# As flask is not a production suitable server, we use will
# a WSGIServer instance to serve our flask application. 
if __name__ == '__main__':  
    app=create_app(DevConfig)
    app.run()