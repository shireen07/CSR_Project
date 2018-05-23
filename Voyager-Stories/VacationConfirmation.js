
	window.addEventListener("load", function(){
		if(typeof(Storage) !== "undefined"){
			document.getElementById("address1").innerHTML = localStorage.getItem("address1");
			document.getElementById("name").innerHTML = localStorage.getItem("name");
			//document.getElementById("hotel_name").innerHTML = localStorage.getItem("hotel");//
			document.getElementById("state").innerHTML = localStorage.getItem("state");
			document.getElementById("zip").innerHTML = localStorage.getItem("zip");
			document.getElementById("cust_city").innerHTML = localStorage.getItem("cust_city");
			document.getElementById("phone").innerHTML = localStorage.getItem("phone");
			//document.getElementById("hotelPrice").innerHTML = localStorage.getItem("hotelPrice");//
			//document.getElementById("hotelAddress").innerHTML = localStorage.getItem("hotelAddress");//
			document.getElementById("address2").innerHTML = localStorage.getItem("address2");
			
			document.getElementById("vacName").innerHTML = localStorage.getItem("vacName").toUpperCase();
			document.getElementById("vacCost").innerHTML = localStorage.getItem("vacCost").toUpperCase();
			document.getElementById("varDur").innerHTML = localStorage.getItem("varDur").toUpperCase();
			
		}
	}, false);// end of load event listeneriating 
	
	function confirm(){
		window.location.replace("http://localhost/CSR_Project/Voyager-Stories/VacationThankYou.html");
	}