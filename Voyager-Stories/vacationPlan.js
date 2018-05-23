
 var xhr;
 
 window.addEventListener("load", function(){
	 document.getElementById("parisRadio").addEventListener("change",paris,false);
	 
	 document.getElementById("londonRadio").addEventListener("change", london,false);
	 document.getElementById("newyorkRadio").addEventListener("change", newyork,false);
	 document.getElementById("amsterdamRadio").addEventListener("change", amsterdam,false);
	 document.getElementById("australiaRadio").addEventListener("change", australia,false);
	 
	 
 },false); //end load event listener:
 
 
  function paris(){
	  try{
		 
		 xhr = new XMLHttpRequest();
		 xhr.addEventListener("readystatechange", function(){
			 if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML ){
							

	  var parisVacation = xhr.responseXML.getElementsByTagName("vacationPlanParis");
	  var messageString = "<h3>Vacation Plan</h3>";
	  for(i=0; i<parisVacation.length; i++){
		  var place= parisVacation.item(i).getElementsByTagName("place").item(0).firstChild.nodeValue;
		  var cost= parisVacation.item(i).getElementsByTagName("cost").item(0).firstChild.nodeValue;
		  var duration= parisVacation.item(i).getElementsByTagName("duration").item(0).firstChild.nodeValue;
		  var discription= parisVacation.item(i).getElementsByTagName("discription").item(0).firstChild.nodeValue;
		  var img= parisVacation.item(i).getElementsByTagName("Image").item(0).firstChild.nodeValue;
		  
		  
		  //localStorage of Flightname, to and from City
  	  	  localStorage.setItem("vacName", place);
		  console.log(localStorage.getItem("vacName"));
		  localStorage.setItem("vacCost", cost);
		  console.log(localStorage.getItem("vacCost"));
		  localStorage.setItem("varDur", duration);
		  console.log(localStorage.getItem("varDur"));
		  
		  
		  messageString += "<b>Plan Name:</b> " + place 
							+"<br/> <b> Cost:</b> "+ cost 
							+ "<br/><b> Duration: </b>" + duration  
							+ "<br/> <b>Know About Paris : </b>" + discription
							+ img +	"<br/>";
		  
	  }//end for:
	  
		 document.getElementById("parisResult").innerHTML= messageString;
		 $('.plan-description').hide();
		 $("#parisResult").show();
		
			 }
	  },false);
		 xhr.open("get" , "vacationPlan.xml",true);
		 xhr.send(null);
		 
	 }catch(exception){
		 alert ("XHR failed" + exception.messageText);
		 
	 }//end try/catch:
	 
  }//end function paris:
  
  function london(){
	  try{
		  
		 xhr = new XMLHttpRequest();
		 xhr.addEventListener("readystatechange", function(){
			 if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML ){
	  londonVacation = xhr.responseXML.getElementsByTagName("vacationPlanLondon");
	  
	  var messageString = "<h3>Vacation Plan</h3>";
	  for(i=0; i<londonVacation.length; i++){
		  var place= londonVacation.item(i).getElementsByTagName("place").item(0).firstChild.nodeValue;
		  var cost= londonVacation.item(i).getElementsByTagName("cost").item(0).firstChild.nodeValue;
		  var duration= londonVacation.item(i).getElementsByTagName("duration").item(0).firstChild.nodeValue;
		  var discription= londonVacation.item(i).getElementsByTagName("discription").item(0).firstChild.nodeValue;
		  messageString +=  " <b>Plan Name:</b> " +place 
						    +"<br/><b>Cost: </b>"+ cost 
							+ " <br/><b>Duration:</b> " + duration  
							+ "<br/><b>Know About London : </b>" + discription +"<br/>";
		  
	  }//end for:
	  document.getElementById("londonResult").innerHTML= messageString;
	   $('.plan-description').hide();
		 $("#londonResult").show();
			 }
	  },false);
		 xhr.open("get" , "vacationPlan.xml",true);
		 xhr.send(null);
		 
	 }catch(exception){
		 alert ("XHR failed" + exception.messageText);
		 
	 }//end try/catch:
	 
  }//end of function london:
 
 function newyork(){
	 try{
		 xhr = new XMLHttpRequest();
		 xhr.addEventListener("readystatechange", function(){
			 if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML ){
	 newyorkVacation = xhr.responseXML.getElementsByTagName("vacationPlanNewyork");
	  
	  var messageString = "<h3>Vacation Plan</h3>";
	  for(i=0; i<newyorkVacation.length; i++){
		  var place= newyorkVacation.item(i).getElementsByTagName("place").item(0).firstChild.nodeValue;
		  var cost= newyorkVacation.item(i).getElementsByTagName("cost").item(0).firstChild.nodeValue;
		  var duration= newyorkVacation.item(i).getElementsByTagName("duration").item(0).firstChild.nodeValue;
		  var discription= newyorkVacation.item(i).getElementsByTagName("discription").item(0).firstChild.nodeValue;
		  messageString +=  "<b> Plan Name:</b> " +place 
							+"<br/><b>Cost:</b> "+ cost 
							+ "<br/><b> Duration:</b> " + duration  
							+ "<br/><b>Know About London : </b>" + discription +"<br/>";
		  
	  }//end for:
	  document.getElementById("newyorkResult").innerHTML= messageString;
	  	   $('.plan-description').hide();
		 $("#newyorkResult").show();
			 }
	  },false);
		 xhr.open("get" , "vacationPlan.xml",true);
		 xhr.send(null);
		 
	 }catch(exception){
		 alert ("XHR failed" + exception.messageText);
		 
	 }//end try/catch:
	 
 }//end of function newyork:
 
 function amsterdam(){
	 try{
		 xhr = new XMLHttpRequest();
		 xhr.addEventListener("readystatechange", function(){
			 if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML ){
	 
	 amsterdamVacation = xhr.responseXML.getElementsByTagName("vacationPlanAmsterdam");
	  
	  var messageString = "<h3>Vacation Plan</h3>";
	  for(i=0; i<amsterdamVacation.length; i++){
		  var place= amsterdamVacation.item(i).getElementsByTagName("place").item(0).firstChild.nodeValue;
		  var cost= amsterdamVacation.item(i).getElementsByTagName("cost").item(0).firstChild.nodeValue;
		  var duration= amsterdamVacation.item(i).getElementsByTagName("duration").item(0).firstChild.nodeValue;
		  var discription= amsterdamVacation.item(i).getElementsByTagName("discription").item(0).firstChild.nodeValue;
		  messageString +=  "<b> Plan Name:</b> " +place 
							+"<br/><b>Cost: </b>"+ cost 
							+ "<br/><b> Duration: </b>" + duration  
							+ "<br/><b>Know About London :</b> " + discription +"<br/>";
		  
	  }//end for:
	  
	  document.getElementById("amsterdamResult").innerHTML= messageString;
	  	   $('.plan-description').hide();
		 $("#amsterdamResult").show();
			 }
	  },false);
		 xhr.open("get" , "vacationPlan.xml",true);
		 xhr.send(null);
		 
	 }catch(exception){
		 alert ("XHR failed" + exception.messageText);
		 
	 }//end try/catch:
	 
	 
 }//end of function amsterdam:
 
 function australia(){
	 try{
		 
		 xhr = new XMLHttpRequest();
		 xhr.addEventListener("readystatechange", function(){
			 if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML ){
	 
	 australiaVacation = xhr.responseXML.getElementsByTagName("vacationPlanAustralia");
	  
	  var messageString = "<h3>Vacation Plan</h3>";
	  for(i=0; i<australiaVacation.length; i++){
		  var place= australiaVacation.item(i).getElementsByTagName("place").item(0).firstChild.nodeValue;
		  var cost= australiaVacation.item(i).getElementsByTagName("cost").item(0).firstChild.nodeValue;
		  var duration= australiaVacation.item(i).getElementsByTagName("duration").item(0).firstChild.nodeValue;
		  var discription= australiaVacation.item(i).getElementsByTagName("discription").item(0).firstChild.nodeValue;
		  
		  messageString +=  "<b> Plan Name:</b> " +place 
							+"<br/><b>Cost:</b> "+ cost 
							+ "<br/><b> Duration:</b> " + duration  
							+ "<br/><b>Know About London :</b> " + discription  +"<br/>";
		  
	  }//end for:
	  document.getElementById("australiaResult").innerHTML= messageString;
	   $('.plan-description').hide();
		 $("#australiaResult").show();
			 }
	 },false);
		 xhr.open("get" , "vacationPlan.xml",true);
		 xhr.send(null);
		 
	 }catch(exception){
		 alert ("XHR failed" + exception.messageText);
		 
	 }//end try/catch:
	 
 }//end of function australia:
 
 
 /*Start*/


 /*end*/
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 