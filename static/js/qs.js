function list() {
  const request = new XMLHttpRequest();
  request.open("GET","/list");
  request.addEventListener("load", (event) => {
    console.log(event.target.responseText);
  });
  request.send();
}

function create(projectName) {
  const request = new XMLHttpRequest();
  request.open("GET", `/create?${projectName}`);
  request.addEventListener("load", (event) => {
    console.log(event.target.responseText);
  });
  request.send();
}

