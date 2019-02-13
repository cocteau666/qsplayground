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
      document.getElementById('Driver').value = request.responseText;
    }
  }
  request.open("GET", `/driver?${projectName}`, false);
  request.send();
}

function getOperationsCode(projectName) {
  request.onreadystatechange = function() {
    if (request.status == 200) {
      document.getElementById('Operations').value = request.responseText;
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
  request.send();
}

function updateDriverCode(projectName) {
  request.onreadystatechange = function() {
    if (request.status == 200) {
      console.log("1");;
    }
  }
  request.open("POST", `/driver?${projectName}`, false);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  driverCode = document.getElementById('Driver').value;
  request.send('s=' + driverCode);
  request.abort();
}

function updateOperationsCode(projectName) {
  request.onreadystatechange = function() {
    if (request.status == 200) {
      console.log("1");;
    }
  }
  request.open("POST", `/operations?${projectName}`, false);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  operationsCode = document.getElementById('Operations').value;
  request.send('s=' + operationsCode);
  request.abort();
}
