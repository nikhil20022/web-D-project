window.onload = function() {
    var fileInput = document.getElementById("fileInput");
    var convertBtn = document.getElementById("convertBtn");
    var result = document.getElementById("result");
  
    convertBtn.addEventListener("click", convertToJSON);
  
    function convertToJSON() {
      var file = fileInput.files[0];
  
      if (file) {
        var reader = new FileReader();
  
        reader.onload = function(e) {
          var content = e.target.result;
          var json = convertTextToJson(content);
          result.textContent = JSON.stringify(json, null, 2);
        };
  
        reader.readAsText(file);
      } else {
        result.textContent = "Please select a file.";
      }
    }
  
    function convertTextToJson(text) {
      var lines = text.split("\n");
      var json = [];
  
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
  
        if (line !== "") {
          json.push({ line: line });
        }
      }
  
      return json;
    }
  };
  