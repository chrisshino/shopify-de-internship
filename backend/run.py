from main import create_app

# As flask is not a production suitable server, we use will
# a WSGIServer instance to serve our flask application. 

if __name__ == '__main__':  
    app=create_app()
    app.run()