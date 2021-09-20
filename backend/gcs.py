from typing import List
from google.cloud import storage

class Gcs():

  storage_client = storage.Client.from_service_account_json("../cloud_storage_service_acct.json")
  bucket = storage_client.get_bucket("shopify-de-intern")

  def uploadOne(self, file:str):

    filename = "%s/%s" % ('images', f"{file}.png")
    blob = self.bucket.blob(filename)
    blob.upload_from_filename(f"{file}.png")

    return blob.public_url

  # def uploadMultiple(self, files:list):

  #   filename = "%s/%s" % ('images', "MYY3.png")
  #   blob = self.bucket.blob(filename)
  #   blob.upload_from_filename("../cat.png")


  #   print("Upload complete")
  #   print(blob.public_url)
  #   return blob.public_url


# 