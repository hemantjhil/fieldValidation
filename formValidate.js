let counter=0;

function addAddress(){
	window.console.log("Adding Address");
	var item=document.getElementById("fieldset");
	var clon=item.cloneNode(true);
	clon.id="address"+counter;
	counter++;
	document.getElementById("fieldset").appendChild(clon);
}

function onSubmit(){
	window.console.log("Saving details");
	localStorage["firstName"]=JSON.stringify(document.getElementById("firstName").value);
	//document.getElementById("firstName1").value=localStorage["firstName"];
	localStorage["middleName"]=JSON.stringify(document.getElementById("middleName").value);
	localStorage['lastName']=JSON.stringify(document.getElementById("lastName").value);
	localStorage["passportNumber"]=JSON.stringify(document.getElementById("passportNumber").value);
	localStorage['issueDate']=JSON.stringify(document.getElementById("issueDate").value);
	localStorage["expiryDate"]=JSON.stringify(document.getElementById("expiryDate").value);
	localStorage["counter"]=counter;
	var a = document.getElementsByTagName("fieldset");
	for(var index=0;index<=counter;index++){
		var a=fieldset.querySelectorAll("input");
		window.console.log((a[index*3]).value);
		houseNo=(a[index*3]).value;
		village=(a[(index*3)+1]).value;
		pinCode=(a[(index*3)+2]).value;
		window.console.log(counter);
		localStorage['houseNo'+index]=houseNo;
		localStorage['village'+index]=village;
		localStorage['pinCode'+index]=pinCode;
		}
}