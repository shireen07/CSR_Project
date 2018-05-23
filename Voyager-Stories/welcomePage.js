var xmlDoc;

window.addEventListener("load", function(){
	
	var option = document.createElement("option");
	option.text = "select one";
	option.value = "-1";
	var select = document.getElementById("city");
	select.appendChild(option);

	var option_htl = document.createElement("option");
	option_htl.text = "select one";
	option_htl.value = "-1";
	var select_htl = document.getElementById("hotel");
	select_htl.appendChild(option_htl);

	//creating event listeners for each event listener
	//the anonymous function passes the name of the file, depending upon whichh radio button is clicked.
	//document.getElementById("city").addEventListener("change", function(){loadCityData();}, false);
	
	loadCityData() ;
	
}, false);// end of load event listeneriating 


function loadCityData() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "cities.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  xmlDoc = xml.responseXML;

  var rowData = xmlDoc.getElementsByTagName("city");

  var select = document.getElementById("city");
  //var hotelsUnderCity = {};

  for (i = 0; i <rowData.length; i++) { 
  	  var option = document.createElement("option");
	  option.text = rowData[i].getElementsByTagName("name")[0].childNodes[0].nodeValue ;
	  option.value =rowData[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
	  //var hotelsdata =  rowData[i].getElementsByTagName("hotels")[0].getElementsByTagName("hotel");
	 // hotelsUnderCity.push(option.value, hotelsdata);
	  select.appendChild(option);
  }

}

function selectCity(value){
	removeOptions(document.getElementById("hotel"));
	var option_htl = document.createElement("option");
	option_htl.text = "select one";
	option_htl.value = "-1";
	var select_htl = document.getElementById("hotel");
	select_htl.appendChild(option_htl);
	
	var rowData = xmlDoc.getElementsByTagName("city");
	for (i = 0; i <rowData.length; i++) { 
  	  var option = document.createElement("option");
  	  if(value ===  rowData[i].getElementsByTagName("name")[0].childNodes[0].nodeValue){
  	  	var select_htl = document.getElementById("hotel");
  	  	var hotelsPricedata =  rowData[i].getElementsByTagName("hotelPrice");
	  	var hotelsdata =  rowData[i].getElementsByTagName("hotelName");
  	  	for (j = 0; j <hotelsdata.length; j++) {
  	  		var option = document.createElement("option");
	  		option.text = hotelsdata[j].innerHTML +" - "+ hotelsPricedata[j].innerHTML;
	  		option.value =hotelsdata[j].innerHTML ;
	  		select_htl.appendChild(option);
  	  	}
  	  	break;
  	  }
  }

}

function removeOptions(selectBox){
	var i;
	for(i=selectBox.options.length-1 ; i>= 0 ; i--){
		selectBox.remove(i);
	}
	
}
function selecthotel(hotel_name){
	var rowData = xmlDoc.getElementsByTagName("city");
	for (i = 0; i <rowData.length; i++) { 
  	  if(document.getElementById("city").value ===  rowData[i].getElementsByTagName("name")[0].childNodes[0].nodeValue){
	  	var hotelsdata =  rowData[i].getElementsByTagName("hotelName");
	  	var hotelsPricedata =  rowData[i].getElementsByTagName("hotelPrice");
	  	var hotelsAddrdata =  rowData[i].getElementsByTagName("hotelAddress");
  	  	for (j = 0; j <hotelsdata.length; j++) {
  	  		if(hotel_name === hotelsdata[j].innerHTML){
  	  			if(typeof(Storage) !== "undefined"){
					localStorage.setItem("hotelPrice", hotelsPricedata[j].innerHTML);
					localStorage.setItem("hotelAddress", hotelsAddrdata[j].innerHTML);
				}
  	  		}
	  	}
	 }
	}
}
function book(){
	var errorList = [];
	if(document.getElementById("city").value === "-1"){
		errorList.push("Select city from drop down");
		document.getElementById("city").classList.add("error");
	}else{
		document.getElementById("city").classList.remove("error");
	} 
	
	if( document.getElementById("hotel").value === "-1"){
		errorList.push("Select hotel from drop down");
		document.getElementById("hotel").classList.add("error");
	}else{
		document.getElementById("hotel").classList.remove("error");
	}
	
	if( document.getElementById("checkIn").value.length !== 10){
		errorList.push("Please Enter proper Check-in date");
		document.getElementById("checkIn").classList.add("error");
	}else{
		document.getElementById("checkIn").classList.remove("error");
	}
	
	if( document.getElementById("checkOut").value.length !== 10){
		errorList.push("Please Enter proper Check-in date");
		document.getElementById("checkOut").classList.add("error");
	}else{
		document.getElementById("checkOut").classList.remove("error");
	}
	
	if(Number(document.getElementById("guests").value) === 0){
		errorList.push("Select number of guests are going to be stay");
		document.getElementById("guests").classList.add("error");
	}else{
		document.getElementById("guests").classList.remove("error");
	}
	if(errorList.length === 0){
		document.getElementById("errorSpan").innerHTML= "";
		//document.getElementById("errorDiv").classList.add("hidden");
		//document.getElementById("errorDiv").style.display = "none";
		
	}else{
		
		var html="<ul>";
		for(var i in errorList){
			html = html+"<li>"+errorList[i]+"</li>";
		}
		html = html+"</ul>";
		document.getElementById("errorSpan").innerHTML = html;
		//document.getElementById("errorDiv").classList.remove("hidden");
		//document.getElementById("errorDiv").style.display = "block";
		return;
	}
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("city", document.getElementById("city").value);
		localStorage.setItem("hotel", document.getElementById("hotel").value);
		localStorage.setItem("checkIn", document.getElementById("checkIn").value);
		localStorage.setItem("checkOut", document.getElementById("checkOut").value);
		localStorage.setItem("guests", document.getElementById("guests").value);
	}
	
	window.location.replace("http://localhost/CSR_Project/Voyager-Stories/personalDetails.html");
	//window.location.replace("http://localhost/HotelBooking/personalDetails.html");
	}
function clear(){
	if(typeof(Storage) !== "undefined"){
		localStorage.clear();
	}
	
}