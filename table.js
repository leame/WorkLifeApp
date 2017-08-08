
//Handles page loading
document.addEventListener("DOMContentLoaded", function(event){
	
  var loadInitTable = new XMLHttpRequest(); //Create new request

  //Opens GET request to retrieve table data
  loadInitTable.open("GET", "http://flip2.engr.oregonstate.edu:17941/getTable", true);

  //Event listener for when loaded table data comes back
  loadInitTable.addEventListener('load',function(){

    //Parses the table data
    var response = JSON.parse(loadInitTable.responseText);

    //Displays the table data
    updateTable(response);
  });

  //Sends request
  loadInitTable.send(null);

  //Prevents form from submitting
  event.preventDefault();

});


//Gets all table rows from the server and puts them into the HTML table
function updateTable(response) {

  //Gets table out of document
  var table = document.getElementById("showData");

  //Clears old table
  while(table.rows.length > 1) {
    table.deleteRow(1);
  }

  //Loops to input new data from mySQL response
  for(i=0; i < response.length; i++) {

    //Insert new row in table
    var row = table.insertRow(1);

    // Insert new cells (<td> elements/columns) in the new <tr> element
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);

    //Creats ids for hidden inputs
    var deleteId = "delete" + i + "'";

    //Inputs the values into the <td>s/columns
    cell1.innerHTML = response[i].fname;
    cell2.innerHTML = response[i].lname;
    cell3.innerHTML = response[i].company;
    cell4.innerHTML = response[i].dept;
    cell5.innerHTML = response[i].position;
    cell6.innerHTML = response[i].email;
    cell7.innerHTML = response[i].phone;
    cell8.innerHTML = response[i].availability;
  }
}
