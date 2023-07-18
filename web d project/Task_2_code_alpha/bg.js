window.onload = function() {
    var color1 = document.getElementById("color1");
    var color2 = document.getElementById("color2");
    var gradientBtn = document.getElementById("gradientBtn");
    var result = document.createElement("div");
    result.classList.add("result");
  
    gradientBtn.addEventListener("click", generateGradient);
  
    function generateGradient() {
      var value1 = color1.value;
      var value2 = color2.value;
  
      var gradient = "linear-gradient(to right, " + value1 + ", " + value2 + ")";
  
      document.body.style.background = gradient;
  
      result.textContent = "background: " + gradient + ";";
      document.body.appendChild(result);
    }
  };
  