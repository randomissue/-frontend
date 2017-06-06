var app = new Vue({
  el: "#app",
  data: {
    issueJSON: undefined,
    showIssue: false
  },
  created: function() {
    this.getIssue();
  },
  methods: {
    getIssue: function() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/issue", true);
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            this.issueJSON = JSON.parse(xhr.responseText);
            console.log(this.issueJSON.title);
            this.showIssue = true;
            this.$nextTick(function () {
              console.log(this.showIssue);
            });
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

app.$watch('showIssue', function (newVal, oldVal) {
  console.log("showIssue changed from" + oldVal + " to " + newVal);
})
