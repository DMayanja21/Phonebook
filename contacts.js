//create an array to store contacts
var contacts=[];
{
//create contact constructor
function Contact(first_name,last_name,phone_number,email,street,city,country){
	this.first_name=first_name;
	this.last_name=last_name;
	this.phone_number=phone_number;
	this.email=email;
	this.street=street;
	this.city=city;
	this.country=country;
}

const save=()=>{
var first_name=document.querySelector('["name=first_name"]').value;
var last_name=document.querySelector('["name=last_name"]').value;
var phone_number=document.querySelector('["name=phone_number"]').value;
var email=document.querySelector('["name=email"]').value;
var street=document.querySelector('["name=street"]').value;
var city=document.querySelector('["name=city"]').value;
var country=document.querySelector('["name=country"]').value;

var entry=new Contact(first_name,last_name,phone_number,email,street,city,country);

contacts.push(entry);

console.log(entry);
};

var searchContacts=()=>{
    document.getElementById("result").innerHTML="";
    var phrase=document.querySelector('[name="sphrase"]').value;
    //get search input from form
    for (var i = 0;i<contacts.length;i++ ) {
    	contact=contacts[i];
    	firstname=contact.firstname;
    	secondname=contact.secondname;
    	phone=contact.phone;
    	if (firstname.includes(phrase)||secondname.includes(phrase)||phone.includes(phrase)) {
    		console.log(firstname);
    		var ptag=document.createElement("p");
    		var node=document.createTextNode(firstname + secondname + ";"+phone);
    		ptag.appendChild(node);
    		var element=document.getElementById("result");
    		element.appendChild(ptag);
    	} else{
    		console.log("not found")
    	};
    };
};

/*
//Create variables for the buttons
var save=document.getElementById("store");
var clear=document.getElementById("reset");

//Set the actions to take place when the buttons are clicked
save.onclick=

//create a contact object using the constrctor


//save the contact

/*var pval="";
for (var i = 0; i < contacts.length; i++) {
	pval=pval+contacts[i];
}
//display array data
document.getElemntById("output point").innerHTML=pval

//print array of contacts

//console,log(contacts[0].firstname)
}

clear.onclick=function clear(){
var first_name=document.getElementById("first_name").value="";
var last_name=document.getElementById("last_name").value="";
var phone_number=document.getElementById("phone_number").value="";
var email=document.getElementById("email").value="";
var street=document.getElementById("street").value="";
var city=document.getElementByName("city").value="";
var country=document.getElementByName("country").value="";
}

//for the search option


/*Objects:
var danny=new Contact("Daniel","Mutumbo","0778842365","danmuts@gmail.com","Prince Charles Lane","Kampala","Uganda");
var jack= new Contact("Jack","Black","0702563627","jackblk@yahoo.co.uk",["Union Road","Kampala","Uganda"]);
*/;