/**************************************************************************
** Name: Matthew Krilanovich
** class: CS290
** Assignment: HW Assignment DOM and Events
** Description: Creates a table and buttons to move around in the table
**************************************************************************/

/**************************************************************************
********************************* Create Table ****************************
**************************************************************************/
// get the reference for body
var body = document.getElementsByTagName("body")[0];

// Create Table
var table = document.createElement("table");

// create the two children of table element
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

// create rows in table and make them child nodes to table
for(var i = 0; i < 4; i++)
{
    // create and add thead to table
    if(i == 0)
    {
        var currentRow = document.createElement("tr");
        // creates all th's of thead
        for(var x = 0; x < 4; x++)
        {
            // create th
            var currentCell = document.createElement("th");
            // add content to said th
            currentCell.textContent = "Header " + (x+1);
            // add border style
            currentCell.style.border = "thin solid black";
            // make th a child of thead
            currentRow.appendChild(currentCell);
        }
        // makes thead child of table
        thead.appendChild(currentRow);
    }
    //
    else
    {
        currentRow = document.createElement("tr");
        // create all td of currentRow
        for(var y = 0; y < 4; y++)
        {
            // create data cell for currentRow
            currentCell = document.createElement("td");
            // add content
            currentCell.textContent = (y+1) + ", " + (i);
            // add border style
            currentCell.style.border = "thin solid black";
            // append current data to current row
            currentRow.appendChild(currentCell);
        }
        //adds row to body of table
        tbody.appendChild(currentRow);
    }
}
// add thead to table
table.appendChild(thead);
// add body to table
table.appendChild(tbody);

// make table a child of body element
body.appendChild(table);

// border
table.setAttribute("border", "1");
//******************************************************************
//*************************** Create Buttons ***********************
//******************************************************************
// rereference all objects
body = document.getElementsByTagName("body")[0];
table = body.getElementsByTagName("table")[0];
tbody = table.getElementsByTagName("tbody")[0];

// select first row in tbody(non header)
currentRow = tbody.getElementsByTagName("tr")[0];
// select first data cell in currentRow
currentCell = currentRow.getElementsByTagName("td")[0];

// highlight currentCell
currentCell.style.border = "thick solid black";

// set starting row and column
var col = 1;
var row = 1;
// 1 = left
// 2 = right
// 3 = up
// 4 = down

// function that moves the current cell


//************************** Create Left Button***********************
var left = document.createElement("button");
var l = document.createTextNode("Left");
left.appendChild(l);
// add action to button
left.addEventListener("click", function(){
move(col, 1);});
body.appendChild(left);


//************************** Create Right Button*************************
var right = document.createElement("button");
var r = document.createTextNode("Right");
right.appendChild(r);
// add action to button
right.addEventListener("click", function() {
move(col, 2);});
body.appendChild(right);


//************************** Create Up Button*****************************
var up = document.createElement("button");
var u = document.createTextNode("Up");
up.appendChild(u);
// add action to button
up.addEventListener("click", function() {
move(row, 3);});
body.appendChild(up);


//************************** Create Down Button***************************
var down = document.createElement("button");
var d = document.createTextNode("Down");
down.appendChild(d);
// add action to button
down.addEventListener("click", function(){
move(row, 4);});
body.appendChild(down);


//************************** Create Mark Cell Button**********************
var mark = document.createElement("button");
var m = document.createTextNode("Mark Cell");
mark.appendChild(m);
body.appendChild(mark);
// add action to button
mark.addEventListener("click", function() {
    currentCell.style.background = "yellow";
    console.log("highlight");
});



function move(position, type_of_button)
{
    // left
    if(type_of_button == 1)
    {
        // verify boundary
        if(position == 1)
        {
            console.log("Can't move left");
            console.log("row = " + row);
            console.log("col = " + col);
            return;
        }
        // move left
        else
        {
            // move currentCell to the left
            currentCell = currentCell.previousElementSibling;
            // highlight cell
            currentCell.style.border = "thick solid black";
            
            // change previous cell back to normal border style
            var oldCell = currentCell.nextElementSibling
            oldCell.style.border = "thin solid black";
            
            // decrement column
            col--;
            console.log("moved left");
            console.log("row = " + row);
            console.log("col = " + col);
        }
    }
    // right
    else if(type_of_button == 2)
    {
        // verify boundary
        if(position == 4)
        {
            console.log("Can't move right");
            console.log("row = " + row);
            console.log("col = " + col);
            return;
        }
        // move right
        else
        {
            // move currentCell to the right
            currentCell = currentCell.nextElementSibling;
            // highlight cell
            currentCell.style.border = "thick solid black";
            
            // change previous cell back to normal border style
            var oldCell = currentCell.previousElementSibling
            oldCell.style.border = "thin solid black";
            
            // increase column
            col++;
            console.log("moved right");
            console.log("row = " + row);
            console.log("col = " + col);
        }
    }
    // up
    else if(type_of_button == 3)
    {
        // verify boundary
        if(position == 1)
        {
            console.log("Can't move up");
            console.log("row = " + row);
            console.log("col = " + col);    
            return;    
        }
        // move up
        else
        {
            // move up a row
            var tempRow = tbody.firstElementChild
            for(var g = 1; g < row - 1; g++)
            {
                tempRow = tempRow.nextElementSibling;
            }
            currentRow= tempRow;
            //currentRow = currentRow.previousElementSibling;
            // traverse to current column
            var tempCell = currentRow.firstElementChild;
            for(var k = 1; k < col; k++)
            {
                tempCell = tempCell.nextElementSibling;
            } 
            // highlight cell
            tempCell.style.border = "thick solid black";
            
            // change previous cell back to normal border style
            currentCell.style.border = "thin solid black";
            
            // assign to the currentCell true value
            currentCell = tempCell;
            // increase row
            row--;
            console.log("moved up");
            console.log("row = " + row);
            console.log("col = " + col);
        }
    }
    // down
    else if(type_of_button == 4)
    {
        // verify boundary
        if(position == 3)
        {
            console.log("Can't move down");
            console.log("row = " + row);
            console.log("col = " + col);
            return;
        }
        // move down
        else
        {
        // move down a row
            currentRow = currentRow.nextElementSibling;
            // traverse to current column
            var tempCell = currentRow.firstElementChild;
            for(var p = 1; p < col; p++)
            {
                tempCell = tempCell.nextElementSibling;
            } 
            // highlight cell
            tempCell.style.border = "thick solid black";
            
            // change previous cell back to normal border style
            currentCell.style.border = "thin solid black";
            
            // assign to the currentCell true value
            currentCell = tempCell;
            // decrease row
            row++;
            console.log("moved down");
            console.log("row = " + row);
            console.log("col = " + col);
        }
        
    }
}
