var app = new Vue({
  el: "#app",
  data: {
    issueJSON: undefined,
    showIssue: false,
    buttonText: buttonStates.normal,
    buttonStates: {
      normal: "Get a random GitHub issue!",
      loading: "Loading ...",
      finished: "Finished!"
    }
  },
  created: function() {
    this.getIssue();
  },
  methods: {
    getIssue: function() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/issue", true);
      xhr.onload = function (e) {
        if (xhr.readyState === 0) {
          this.buttonText = this.buttonStates.loading;
        }
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            this.buttonText = "Parsing JSON ...";
            this.issueJSON = JSON.parse(xhr.responseText);
            console.log(this.issueJSON.title);
            this.buttonText = this.buttonState.finished
            this.showIssue = true;
          } else {
            console.error(xhr.statusText);
          }
        }
      }
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
      }
      xhr.send(null);
    },

  }
});
