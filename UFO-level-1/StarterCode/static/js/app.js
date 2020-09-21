// from data.js
var tableData = data;

// function to display UFO sightings
function tableDisplay(ufoSightings) {

    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufo) => {
        var row = tbody.append("tr");


        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
tableDisplay(tableData);