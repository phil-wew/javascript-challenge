// from data.js
var tableData = data;


// The new sighting to add to the table
var newSighting = [];

// Use D3 to select the table
var table = d3.select("table");


// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");


// Use D3 to select the table body
var tbody = d3.select("tbody");


// Append one table row `tr` to the table body
var row = tbody.append("tr");

// Append one cell for city
row.append("td").text(newSighting[0]);

// Append one cell for the state
row.append("td").text(newSighting[1]);

// Append one cell for the country
row.append("td").text(newSighting[2]);

// Append one cell for the shape
row.append("td").text(newSighting[3]);

// Append one cell for the duration
row.append("td").text(newSighting[4]);

// Append one cell for the comments
row.append("td").text(newSighting[5]);