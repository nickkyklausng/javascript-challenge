// from data.js
var tableData = data;
var tbody =  d3.select("tbody")
//YOUR CODE HERE!
function table(tableData) {
tableData.forEach(function(datas) {
    var row = tbody.append("tr");
    Object.entries(datas).forEach(function([key, value]) {

        var cell = row.append("td");
        cell.text(value);
    });
});
};

//print table data
table(tableData);

var button = d3.select("#filter-btn");
button.on("click",runEnter)

// create a function that clears original table
function clearTable() {
    // select the body and remvoe all tr and td elements
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };


function runEnter() {
    d3.event.preventDefault();
    clearTable();

    //select input element and user input
    var InputElement = d3.select("#datetime");
    var InputValue = InputElement.property("value");

    var filteredData = tableData.filter(data => data.datetime === InputValue.trim());
    // console check for correct data being filtered
    console.log(filteredData)
    // insert filtered data into table
    table(filteredData)
};