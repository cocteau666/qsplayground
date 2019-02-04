# qsplayground
This is a tool for Q# throughout a web access written in python3 with Flask

## How to use

Before, python3 and Flask library.
To install Flask, use pip.
    $ pip install Flask

To set dotnet command path, change a variable "dotnet_command_path" in dotnetqs.py.

To run, do this.
    $ LANG=c python3 dotnetqs.py

To use, access from Web browser and port 5000/TCP.

## Command

### create new project
    http://hostname:5000/create?ProjectName

### build project
    http://hostname:5000/build?ProjectName

### Override Driver.cs

### Override Operations.qs
