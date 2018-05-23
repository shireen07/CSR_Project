

//Games 

var baseArray = ["PARIS", "LONDON", "PERU", "BEIJING", "CAPE TOWN", "FRANCE", "NEW ZELAND", "MELBOURNE", "SPAIN", "GENEVA", "KREMLIN", "ALASKA"];

var slot1Array = []; //blank array
var slot2Array = []; //blank array
var slot3Array = []; //blank array	

//create functions

function start(){
	//call createSlots function to populate the blank arrays with a random elements
	//create event listeners for buttons
	document.getElementById("playButton").addEventListener("click", play, false);
	document.getElementById("cheatButton").addEventListener("click", cheat, false);
	document.getElementById("oddsButton").addEventListener("click", odds, false);
	document.getElementById("showButton").addEventListener("click", showArrays, false);
	createSlots();
}//end function start			 


function createSlots(){
	//fetch a random number element to populate the arrays
	for (var i=0; i < baseArray.length; i++){
		slot1Array.push(baseArray[RandomGen()]); //one way to call
		slot2Array[i] = baseArray[RandomGen()];  //another way to call
		slot3Array.push(baseArray[RandomGen()]);
		console.log(slot1Array.toString());
	}//end for loop
	
}//end function createSlots


function play(){
	//variables to store the elements
	var slot1Value = slot1Array[RandomGen()];
	var slot2Value = slot2Array[RandomGen()];
	var slot3Value = slot3Array[RandomGen()];
	
	//display one random elemnt from each corresponding array
	document.getElementById("slot1TextBox").value = slot1Value;
	document.getElementById("slot2TextBox").value = slot2Value;
	document.getElementById("slot3TextBox").value = slot3Value;
	
	//is it a jackpot?
	if( (slot1Value == slot2Value) && (slot1Value == slot3Value) ){
		//values are same.so Jackpot message
		document.getElementById("jackpotPara").innerHTML = "Hooorrayy!!! You have won the Jackpot! Celebrate!!!"
	}else{
		//sorry you missed the jackpot. Missed message
		document.getElementById("jackpotPara").innerHTML = "Oops! you missed the Jackpot!! Try your luck Again! :)";
	}//end if-else
	
}//end function play


function cheat(){
	//assign the same value to all three slots
	var cheatValue = slot1Array[RandomGen()];
	document.getElementById("slot1TextBox").value = cheatValue;
	document.getElementById("slot2TextBox").value = cheatValue;
	document.getElementById("slot3TextBox").value = cheatValue;
	
	//display the cheat message
	document.getElementById("jackpotPara").innerHTML = "You won! Cheating has its Perks! ;)"
}//end function cheat


function odds(){
	//display the odds of your winning the jacpot
	document.getElementById("jackpotPara").innerHTML = "Your Odds of winning the Jacpot are: " + ((1/12) * (1/12) * (1/12));
}//end function odds


function showArrays(){
	//various ways to display an array
	
	//variable for for..in loop
	var meesageString = "Slot3 Array: ";
	
	//using tostring() method
	document.getElementById("jackpotPara").innerHTML = "Base Array: " + baseArray.toString().toLowerCase() + "<br/>";
	
	//using .join() method
	document.getElementById("jackpotPara").innerHTML += "Slot1 Array: " + slot1Array.join(",  ").toLowerCase() + "<br/>";
	
	//using .join() method with seperator and using string sort
	document.getElementById("jackpotPara").innerHTML += "Slot2 Array: " + slot2Array.sort().join(" | ").toLowerCase() + "<br/>";
	
	//using for..in loop
	for (var i in slot3Array){
		meesageString += slot3Array[i].toLowerCase() + " ~ ";
	}//end for..in loop
	//display the result
	document.getElementById("jackpotPara").innerHTML += meesageString;
	
}//end function showArrays


function RandomGen(){
	//function that creates a random number between 0 & 11 and returns the value (0 to 11 inclusive)
	return Math.floor(Math.random()*12);
	
}//end function RandomGen


//create a pageLoad event listener
window.addEventListener("load", start, false);








