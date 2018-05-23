
window.addEventListener("load", function(){
	document.getElementById("searchbutton").addEventListener("click", searchSelect, false);
	document.getElementById("BookBtn").style.visibility = "hidden";
},false);

  function searchSelect(){
	  try{
		 
		 xhr = new XMLHttpRequest();
		 
		 var flightFromSearch=document.getElementById('data1').value.toLowerCase();
	     var flightToSearch=document.getElementById("data2").value.toLowerCase();
	     var adultSearch=document.getElementById("selectPerson").value.toLowerCase();

		 xhr.addEventListener("readystatechange", function(){

			 if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML ){
             var flights = xhr.responseXML.getElementsByTagName("flights");	
             var totalRecord=flights[0].getElementsByTagName("flight").length;
	
	         var messageString = "<h3>Flight Details</h3>";
	         for(i=0; i<totalRecord; i++){
		        var flightFrom= flights[0].children[i].getElementsByTagName("flightFrom")[0].textContent.toLowerCase();
		        var flightTo= flights[0].children[i].getElementsByTagName("flightTo")[0].textContent.toLowerCase();
		        var adult= flights[0].children[i].getElementsByTagName("adult")[0].textContent.toLowerCase();
		        var children= document.getElementById("childSelect").value;	
		      
		     if( flightFromSearch==flightFrom && flightToSearch== flightTo && adultSearch==adult)
		       {
	           var flightName= flights[0].children[i].getElementsByTagName("flightName")[0].textContent.toLowerCase();
		       var arrival= flights[0].children[i].getElementsByTagName("arrival")[0].textContent.toLowerCase();
		       var departure= flights[0].children[i].getElementsByTagName("departure")[0].textContent.toLowerCase();
		  
		       //date
		       var selectedDate = document.getElementById("date").value;
		  
		
		       //localStorage of Flightname, to and from City
  	  	       localStorage.setItem("airlineName", flightName);
		       console.log(localStorage.getItem("airlineName"));
		       localStorage.setItem("DepartCity", flightFrom);
		       console.log(localStorage.getItem("DepartCity"));
		       localStorage.setItem("ArrvCity", flightTo);
		       console.log(localStorage.getItem("ArrvCity"));
		       localStorage.setItem("savedDate", selectedDate);
		       console.log(localStorage.getItem("savedDate"));
	  	
		
		     	messageString += "<b> Airlines Name:</b> "+ flightName 
			                  + "<br/><b> From - To Destinations: </b>" + flightFrom+" - "+ flightTo
							  + "<br/><b> Departure-Arrival Time: </b>" + departure+" - "+ arrival					
							  + "<br/> <b>adult(s) : </b>" + adult
							  + "<br/> <b>children : </b>" + children;
							
		      document.getElementById("resultPara").innerHTML=messageString;
          
              /*//save choice to localstorage		  
              localStorage.setItem("airlineName", flightName.innerHTML);
		      localStorage.setItem("DCity", flightFrom.innerHTML);
		      localStorage.setItem("ACity", flightTo.innerHTML);
		      */
		  		  
		  //hide/show items
		  if(document.getElementById("BookBtn").style.visibility=="hidden"){
			  document.getElementById("searchbutton").style.visibility = "hidden";
		      document.getElementById("BookBtn").style.visibility = "visible";
		  }//end visibility if
		  
		  break;
		  }//end if to match selected data

		
		}//end for
		
			 }//end if
			 
	  },false);
		 xhr.open("get" , "flight.xml",true);
		 xhr.send(null);
		 
	 }catch(exception){
		 alert ("XHR failed" + exception.messageText);
		 
	 }//end try/catch:
	 
  }//end function paris: