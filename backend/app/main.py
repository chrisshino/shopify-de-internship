from flask import Flask 

app = Flask(__name__)

@app.route('/')
def index():
  return 'hello world'

@app.route('/<hello>')
def hello(hello):
  if hello == "me":
    return 'yo'
  else:
    return "wooppps"
