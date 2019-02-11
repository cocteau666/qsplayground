function getProjectList() {
  const request = new XMLHttpRequest();
  request.open("GET","/list");
  request.addEventListener("load", (event) => {
    document.getElementById('ProjectList').innerHTML = event.target.responseText;
  });
  request.send();
}

function createProject(projectName) {
  const request = new XMLHttpRequest();
  request.open("GET", `/create?${projectName}`);
  request.addEventListener("load", (event) => {
    console.log(event.target.responseText);
  });
  request.send();
}

