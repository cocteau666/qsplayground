const request = new XMLHttpRequest();

function getProjectList() {
  request.onreadystatechange = function() {
    if (request.status == 200) {
      console.log(request.responseText);
      document.getElementById('ProjectList').innerHTML = request.responseText;
    }
  }
  request.open("GET", "/list", false);
  request.send();
}

function createProject(projectName) {
  request.onreadystatechange = function() {
    if (request.status == 200) {
      console.log(request.responseText);
    }
  }
  request.open("GET", `/create?${projectName}`, false);
  request.send();
}

function getDriverCode(projectName) {
  request.onreadystatechange = function() {
    if (request.status == 200) {
      document.getElementById('Driver').innerHTML = request.responseText;
    }
  }
  request.open("GET", `/driver?${projectName}`, false);
  request.send();
}

function getOperationsCode(projectName) {
  request.onreadystatechange = function() {
    if (request.status == 200) {
      document.getElementById('Operations').innerHTML = request.responseText;
    }
  }
  request.open("GET", `/operations?${projectName}`, false);
  request.send();
}

function buildCode(projectName) {
  request.onreadystatechange = function() {
    if (request.status == 200) {
      document.getElementById('BuildConsole').innerHTML = request.responseText;
    }
  }
  request.open("GET", `/build?${projectName}`, false);
  request.timeout = 120000;
  request.send();
}

