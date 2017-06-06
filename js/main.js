var app = new Vue({
  el: "#app",
  functions: {
    getIssue: function() {
      console.log("getIssue called");
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/issue", true);
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            renderIssue(xhr.responseText);
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
  }
});


var renderIssue = function(issueJSON) {
  console.log(issueJSON);
}
