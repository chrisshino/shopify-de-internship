from google.cloud import storage
from tempfile import TemporaryFile
import base64
from PIL import Image
from io import BytesIO
import os

def upload(file):
  # I learned SOOOO much about python's file system building this part out it's insane.

  storage_client = storage.Client.from_service_account_json("../cloud_storage_service_acct.json")
  bucket = storage_client.get_bucket("shopify-de-intern")
  title = file[10:25]
  
  tempdir = f"{os.path.dirname(os.path.realpath(__file__))}/images"
  os.mkdir(tempdir)

  im = base64.b64decode(file)
  img = Image.open(BytesIO(im))
  img.save(f"{tempdir}/{title}.jpeg")
  img.close()
  
 
  blob = bucket.blob(f"{title}")
  blob.upload_from_filename(f"{tempdir}/{title}.jpeg")
  return blob.public_url


  

