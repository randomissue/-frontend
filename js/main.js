var app = new Vue({
  el: "#app",
  data: {
    issueObject: undefined,
    loadedJSON: false
  },
  methods: {
    getIssue: function() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/issue", true);
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            this.issueJSON = JSON.parse(xhr.responseText);
            this.loadedJSON = true;
            console.log("JSON loaded!");
            console.log(xhr.responseText);
          } else {
            console.error(xhr.statusText);
          }
        }
      }
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
      }
      xhr.send(null);
    }
  }
});
