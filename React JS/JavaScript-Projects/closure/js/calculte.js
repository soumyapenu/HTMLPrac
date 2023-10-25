calculate = () =>{
    const pi = 3.14;

     let radius = document.getElementById("radius").value;

     let area = calcArea();

     function calcArea(){
        return pi*radius**2;
     }

     document.getElementById("area").value = area;

     let perimeter = calcPeri();

     function calcPeri(){
        return 2*pi*radius;
     }

     document.getElementById("perimeter").value = perimeter;
}