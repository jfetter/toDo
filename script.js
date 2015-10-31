"use strict";

$(document).ready(init);

function init() {
	$("#get").click(getClicked);

}

function getClicked(){

	console.log($("#date").val());
}


var newItem = ""

//date.Parse(year-month-day) 
//returns a date in unix epoch time

//$(".lastTr").append("newItem").removeClass(".lastTd")

//append to an array then push the entire array to the dom
