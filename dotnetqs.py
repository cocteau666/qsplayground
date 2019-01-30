# coding: utf-8

from flask import Flask
app = Flask(__name__)

import subprocess

@app.route('/create')
def create():
  output = subprocess.check_output(["/usr/local/share/dotnet/dotnet", "new", "console", "-lang", "Q#", "--output", "Bell"])
  return output

@app.route('/build')
def build():
  output = subprocess.check_output(["/usr/local/share/dotnet/dotnet", "run"])
  return output

if __name__ == "__main__":
  app.run()

