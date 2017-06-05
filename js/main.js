var menuOpened = false;

window.onload = function() {
  document.getElementById("issue-button").addEventListener("click", getIssue);
}

var getIssue = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/issue", true);
  xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
}
