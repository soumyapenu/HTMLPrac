showMapped = () => {
    const numbers = [10,34,56,89,52];

    const squared = numbers.map((number) => {
        if(number%2==0){
          return number*number;
        }
        else{
            return number;
        }
});
        

    let showSquared =
    "<table class= table table-stripped>" +
    "<thead>" +
    "<tr>" +
    "<th>Squared Numbers</th>" +
    "</tr>" +
    "</thead><tbody>";

    for(i=0; i<squared.length; i++){
        showSquared += "<tr><td>" + squared[i]+"</td></tr>";
    }

    showSquared += "</tbody></table>";

    document.getElementById("arrays").innerHTML = showSquared;
}