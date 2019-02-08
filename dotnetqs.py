# coding: utf-8

from flask import Flask, request, render_template
app = Flask(__name__)

import subprocess
import os
import shutil

dotnet_command_path = "/usr/local/bin/dotnet"

@app.route('/')
def main_page():
  return render_template("index.html")

@app.route('/list')
def list():
  files = os.listdir(".")
  files_dir = [f for f in files if os.path.isdir(os.path.join(".", f))]
  files_dir.remove('static')
  files_dir.remove('templates')
  files_dir.remove('.git')
  return ",".join(files_dir)

@app.route('/create')
def create():
  path = request.query_string
  output = subprocess.check_output([dotnet_command_path, "new", "console", "-lang", "Q#", "--output", path])
  return output

@app.route('/delete')
def delete():
  path = request.query_string
  if path != "templates" and path != "static" and path != ".git":
    shutil.rmtree(path)
  return "delete complete"

@app.route('/build')
def build():
  path = request.query_string
  os.chdir(path)
  output = subprocess.check_output([dotnet_command_path, "run"])
  os.chdir("../")
  return output

@app.route('/driver', methods=["GET", "POST"])
def driver():
  if request.method == "GET":
    path = request.query_string
    os.chdir(path)
    driver = open("Driver.cs", "r")
    contents = driver.read()
    driver.close()
    os.chdir("../")
    return contents
  else:
    s = request.form['s']
    path = request.query_string
    os.chdir(path)
    driver = open("Driver.cs", "w")
    driver.write(s)
    driver.close()
    os.chdir("../")
    return "save change"

@app.route('/operations', methods=["GET", "POST"])
def operations():
  if request.method == "GET":
    path = request.query_string
    os.chdir(path)
    operations = open("Operations.qs", "r")
    contents = operations.read()
    operations.close()
    os.chdir("../")
    return contents
  else:
    s = request.form['s']
    path = request.query_string
    os.chdir(path)
    operations = open("Operations.qs", "w")
    operations.write(s)
    operations.close()
    os.chdir("../")
    return "save change"

if __name__ == "__main__":
  app.run()

