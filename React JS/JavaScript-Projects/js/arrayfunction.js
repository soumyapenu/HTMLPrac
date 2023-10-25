showArray = () => {
  const iplTeams = [
    "Chennai Super Kings",
    "Royal Challengers Banglore",
    "Mumbai Indians",
    "Rajasthan Royals",
  ];
  let showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  for (i = 0; i < iplTeams.length; i++) {
    showIPL += "<tr><td>" + iplTeams[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("arrays").innerHTML = showIPL;
};
shiftIt = () => {
  const iplTeams = [
    "Chennai Super Kings",
    "Royal Challengers Banglore",
    "Mumbai Indians",
    "Rajasthan Royals",
  ];
  let showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  let shifted = "<h3>" + "Shifted item is: " + iplTeams.shift() + "</h3>";
  document.getElementById("shifted").innerHTML = shifted;
  for (i = 0; i < iplTeams.length; i++) {
    showIPL += "<tr><td>" + iplTeams[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("after").innerHTML = showIPL;
};
unShiftIt = () => {
  const iplTeams = [
    "Chennai Super Kings",
    "Royal Challengers Banglore",
    "Mumbai Indians",
    "Rajasthan Royals",
  ];
  let showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  let shifted = "<h3>" + "Shifted item is: " + iplTeams.shift() + "</h3>";
  document.getElementById("shifted").innerHTML = shifted;
  for (i = 0; i < iplTeams.length; i++) {
    showIPL += "<tr><td>" + iplTeams[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("after").innerHTML = showIPL;
  let unShifted = iplTeams.unshift("Kolkata Knight Riders");
  document.getElementById("unshift").innerHTML =
    "<h4>The unshifted value is:" + unShifted + "</h4>";
  showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  for (i = 0; i < iplTeams.length; i++) {
    showIPL += "<tr><td>" + iplTeams[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("unshifted").innerHTML = showIPL;
};
concatIt = () => {
  let iplTeams = [
    "Chennai Super Kings",
    "Royal Challengers Banglore",
    "Mumbai Indians",
    "Rajasthan Royals",
  ];
  let newItem = document.getElementById("name").value;
  iplTeams = iplTeams.concat(newItem);
  console.log(iplTeams);
  let showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  for (i = 0; i < iplTeams.length; i++) {
    showIPL += "<tr><td>" + iplTeams[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("concatenated").innerHTML = showIPL;
};
slice1 = () => {
  let iplTeams = [
    "Chennai Super Kings",
    "Royal Challengers Banglore",
    "Mumbai Indians",
    "Rajasthan Royals",
  ];
  const sliced = iplTeams.slice(1);
  let showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  for (i = 0; i < sliced.length; i++) {
    showIPL += "<tr><td>" + sliced[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("sliced").innerHTML = showIPL;
};
slice2 = () => {
  let iplTeams = [
    "Chennai Super Kings",
    "Royal Challengers Banglore",
    "Mumbai Indians",
    "Rajasthan Royals",
  ];
  const sliced = iplTeams.slice(1, 3);
  let showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  for (i = 0; i < sliced.length; i++) {
    showIPL += "<tr><td>" + sliced[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("sliced").innerHTML = showIPL;
};
splice1 = () => {
  let iplTeams = [
    "Chennai Super Kings",
    "Royal Challengers Banglore",
    "Mumbai Indians",
    "Rajasthan Royals",
  ];
  iplTeams.splice(2, 0, "Delhi Capitals", "Punjab Kings");
  let showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  for (i = 0; i < iplTeams.length; i++) {
    showIPL += "<tr><td>" + iplTeams[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("sliced").innerHTML = showIPL;
};
splice2 = () => {
  let iplTeams = [
    "Chennai Super Kings",
    "Royal Challengers Banglore",
    "Mumbai Indians",
    "Rajasthan Royals",
  ];
  iplTeams.splice(2, 2, "Delhi Capitals", "Punjab Kings");
  let showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  for (i = 0; i < iplTeams.length; i++) {
    showIPL += "<tr><td>" + iplTeams[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("sliced").innerHTML = showIPL;
};
sorted = () => {
  let iplTeams = [
    "Chennai Super Kings",
    "Royal Challengers Banglore",
    "Mumbai Indians",
    "Rajasthan Royals",
  ];
  iplTeams.sort();
  let showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  for (i = 0; i < iplTeams.length; i++) {
    showIPL += "<tr><td>" + iplTeams[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("sliced").innerHTML = showIPL;
};
reverseSort = () => {
  let iplTeams = [
    "Chennai Super Kings",
    "Royal Challengers Banglore",
    "Mumbai Indians",
    "Rajasthan Royals",
  ];
  iplTeams.sort();
  iplTeams.reverse();
  let showIPL =
    "<table class='table table-striped'>" +
    "<thead>" +
    "<tr>" +
    "<th>IPL Teams</th>" +
    "</tr>" +
    "</thead><tbody>";
  for (i = 0; i < iplTeams.length; i++) {
    showIPL += "<tr><td>" + iplTeams[i] + "</td></tr>";
  }
  showIPL += "</tbody></table>";
  document.getElementById("sliced").innerHTML = showIPL;
};
