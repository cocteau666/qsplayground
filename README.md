# qsplayground
This is a tool for Q# throughout a web access written in python3 with Flask

## How to use

First, install dotnet command and Q# SDK. See 
[Installing the Quantum Development Kit for the Command Line](https://docs.microsoft.com/en-us/quantum/install-guide/command-line?view=qsharp-preview)

Next, python3 and Flask library.
To install Flask, use pip.

    $ pip install Flask

To set dotnet command path, change a variable "dotnet_command_path" in dotnetqs.py.

To run, do this.

    $ python3 dotnetqs.py

To use, access from Web browser and port 5000/TCP.

## Command

### create new project
    http://hostname:5000/create?ProjectName

### list projects
    http://hostname:5000/list

### build project
    http://hostname:5000/build?ProjectName

### delete project
    http://hostname:5000/delete?ProjectName

### Read Driver.cs (GET method)
    http://hostname:5000/driver?ProjectName

### Override Driver.cs (POST method, key = "s")
    http://hostname:5000/driver?ProjectName

### Read Operations.qs (GET method)
    http://hostname:5000/operations?ProjectName

### Override Operations.qs (POST method, key = "s")
    http://hostname:5000/operations?ProjectName

