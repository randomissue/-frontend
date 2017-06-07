var app = new Vue({
  el: "#app",
  data: {
    issueObject: undefined,
    loadedJSON: false,
    issueBody: undefined
  },
  methods: {
    getIssue: function() {
      var vm = this;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/issue", true);
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            vm.issueObject = JSON.parse(xhr.responseText);
            var converter = new showdown.Converter();
            vm.issueBody = converter.makeHtml(vm.issueObject.body);
            vm.loadedJSON = true;
            console.log("JSON loaded!");
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
