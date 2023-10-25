function calculate() {
   const pi = 3.14;
   let radius = parseFloat(document.getElementById("radius").value);
   let area = pi*radius*radius;
   document.getElementById("area").value = area;
  }