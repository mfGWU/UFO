// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  function handleClick() {
      // Need to create a couple of variables to 
      // hold our date data, both filtered and unfiltered
      // D3 is look for the #datetime id in the HTML tags
      // not only to look for where our date values are stored 
      // on the webpage, but to actually grab that information 
      // and hold it in the "date" variable.
    let date = d3.select("#datetime").property("value");
      
      // set a default filter and save it to a new variable
      // tableData is the original data as imported 
      // from our data.js file
    let filteredData = tableData;   

    if (date) {
        // Apply the filter to the table data 
        // "Show only the rows where the date is equal to the date filter we created above."
        filteredData = filteredData.filter(row => row.datetime === date);
    };

       // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

  //Listen for the Event 
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);