window.onload=function(){
	var counter=localStorage["counter"];
	for(index=0;index<counter;index++){
		window.console.log("Adding Address");
		var item=document.getElementById("fieldset");
		var clon=item.cloneNode(true);
		clon.id="address"+counter;
		document.getElementById("fieldset").appendChild(clon);
	}
	document.getElementById("firstName").innerHTML=localStorage["firstName"];
	document.getElementById("middleName").innerHTML=localStorage["middleName"];
	document.getElementById("lastName").innerHTML=localStorage["lastName"];
	document.getElementById("passportNumber").innerHTML=localStorage["passportNumber"];
	document.getElementById("issueDate").innerHTML=localStorage["issueDate"];
	document.getElementById("expiryDate").innerHTML=localStorage["expiryDate"];
	for(index=0;index<=counter;index++){
		var a=fieldset.querySelectorAll("b");
		a[index*3].innerHTML=localStorage['houseNo'+index];
		a[(index*3)+1].innerHTML=localStorage['village'+index];
		a[(index*3)+2].innerHTML=localStorage['pinCode'+index];
		}
}