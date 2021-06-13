// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Input data into the HTML

var inputData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}
//reference data
inputData(tableData);


// Create an Event Listener for the Button

 // Select the button
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property.
var inputField = d3.select("#datetime");

// This function is triggered when the button is clicked
function handleClick() {
    console.log("A button was clicked!");
    //test using d3 to see if object dispatched the event
    console.log(d3.event.target);
}
// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
  });
  


// Setup Filter Button for Date and City