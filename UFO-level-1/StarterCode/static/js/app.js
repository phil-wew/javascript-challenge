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


var button = d3.select("#filter-btn");

button.on("click", function() {

            // Prevent the page from refreshing
            d3.event.preventDefault();

            // Select the input element and get the raw HTML node
            var inputElement = d3.select("#patient-form-input");