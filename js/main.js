var app = new Vue({
  el: "#app",
  data: {
    issueJSON: undefined,
    showIssue: false
  },
  methods: {
    getIssue: function() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/issue", true);
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            this.issueJSON = JSON.parse(xhr.responseText);
            this.showIssue = true;
          } else {
            console.error(xhr.statusText);
          }
        }
      };
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
      };
      xhr.send(null);
    },

  }
});
