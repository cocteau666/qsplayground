# coding: utf-8

from flask import Flask
from flask import request
app = Flask(__name__)

import subprocess
import os

dotnet_command_path = "/usr/local/share/dotnet/dotnet"

@app.route('/create')
def create():
  path = request.query_string
  output = subprocess.check_output([dotnet_command_path, "new", "console", "-lang", "Q#", "--output", path])
  return output

@app.route('/build')
def build():
  path = request.query_string
  os.chdir(path)
  output = subprocess.check_output([dotnet_command_path, "run"])
  os.chdir("../")
  return output

@app.route('/editdriver')
def editdriver():
  return ""

@app.route('/editoperations')
def editoperations():
  return ""

if __name__ == "__main__":
  app.run()

