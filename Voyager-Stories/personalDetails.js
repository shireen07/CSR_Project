
function submit(){
	var errorList = [];
	if(document.getElementById("name").value.length === 0){
		errorList.push("Please enter name");
		document.getElementById("name").classList.add("error");
	}else{
		document.getElementById("name").classList.remove("error");
	} 
	
	if(document.getElementById("email").value.length === 0){
		errorList.push("Please enter email");
		document.getElementById("email").classList.add("error");
	}else{
		var emailAdd = document.getElementById("email").value;
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		var emailResult = testEmail.test(emailAdd);
		if(!emailResult){
			errorList.push("Please enter proper email");
			document.getElementById("email").classList.add("error");
		}else{
			
			document.getElementById("email").classList.remove("error");
		}
	}
	
	if(document.getElementById("phone").value.length < 14){
		errorList.push("Please enter phone number");
		document.getElementById("phone").classList.add("error");
	}else{
		document.getElementById("phone").classList.remove("error");
	}
	
	if(document.getElementById("add1").value.length === 0){
		errorList.push("Please enter address");
		document.getElementById("add1").classList.add("error");
	}else{
		document.getElementById("add1").classList.remove("error");
	}
	
	if(document.getElementById("city").value.length === 0){
		errorList.push("Please enter city");
		document.getElementById("city").classList.add("error");
	}else{
		document.getElementById("city").classList.remove("error");
	}
	
	
	if(document.getElementById("state").value.length < 2){
		errorList.push("Please enter state");
		document.getElementById("state").classList.add("error");
	}else{
		document.getElementById("state").classList.remove("error");
	}
	
	if(document.getElementById("zip").value.length <5){
		errorList.push("Please enter zip");
		document.getElementById("zip").classList.add("error");
	}else{
		document.getElementById("zip").classList.remove("error");
	}
	
	if(document.getElementById("cardNo").value.length <16){
		errorList.push("Please enter valid card number");
		document.getElementById("cardNo").classList.add("error");
	}else{
		document.getElementById("cardNo").classList.remove("error");
	}
	
	if(document.getElementById("cardName").value.length === 0){
		errorList.push("Please enter name on the card");
		document.getElementById("cardName").classList.add("error");
	}else{
		document.getElementById("cardName").classList.remove("error");
	}
	
	if(document.getElementById("expDt").value.length < 5){
		errorList.push("Please enter expiration date");
		document.getElementById("expDt").classList.add("error");
	}else{
		document.getElementById("expDt").classList.remove("error");
	}
	
	if(document.getElementById("cvv").value.length < 3){
		errorList.push("Please enter CVV number back on the card ");
		document.getElementById("cvv").classList.add("error");
	}else{
		document.getElementById("cvv").classList.remove("error");
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
		localStorage.setItem("name", document.getElementById("name").value);
		localStorage.setItem("email", document.getElementById("email").value);
		localStorage.setItem("phone", document.getElementById("phone").value);
		localStorage.setItem("address1", document.getElementById("add1").value);
		localStorage.setItem("address2", document.getElementById("add2").value);
		localStorage.setItem("cust_city", document.getElementById("city").value);
		localStorage.setItem("state", document.getElementById("state").value);
		localStorage.setItem("zip", document.getElementById("zip").value);
		//localStorage.setItem("cust_city", document.getElementById("city").value);
	}
	
	window.location.replace("http://localhost/CSR_Project/Voyager-Stories/confirmPage.html");
	//window.location.replace("http://localhost/HotelBooking/confirmPage.html");
	}
	
	