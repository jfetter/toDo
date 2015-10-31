"use strict";

$(document).ready(init);

function init() {
	$("#get").click(getClicked);

}

function getClicked(){

	console.log($("#date").val());
}


//date.Parse(year-month-day) 
//returns a date in unix epoch time

