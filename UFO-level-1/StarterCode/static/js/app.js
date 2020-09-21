// from data.js
var tableData = data;

// function to display UFO sightings
function tableDisplay(ufoSightings) {


    var tbody = d3.select("tbody");
    //loop through sightings - append row with data
    ufoSightings.forEach((ufo) => {
        var row = tbody.append("tr");

        // loop through key/values append data to cells
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
tableDisplay(tableData);

// //////// Filtering Table ////////

function deleteTbody() {
    d3.select("tbody")
        .selectAll("tr").remove()
        .selectAll("td").remove();
};

// select filter button
var button = d3.select("#filter-btn");


//event handlers
button.on("click", function(event) {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    deleteTbody();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(ufoSightings => ufoSightings.datetime === inputValue);

    tableDisplay(filteredData);

})