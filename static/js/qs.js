const request = new XMLHttpRequest();

function getProjectList() {
  request.onreadystatechange = function() {
    if (request.status == 4) {
      if (request.status == 200) {
        console.log(request.responseText);
        document.getElementById('ProjectList').innerHTML = request.responseText;
      }
    }
  }
  request.open("GET", "/list", false);
  request.send();
}

function createProject(projectName) {
  request.onreadystatechange = function() {
    if (request.status == 4) {
      if (request.status == 200) {
        console.log(request.responseText);
      }
    }
  }
  request.open("GET", `/create?${projectName}`, false);
  request.send();
}

