//create an array to store contacts
var contacts=[];
{
//create contact object
function Contact(first_name,last_name,phone_number,email,street,city,country){
	this.first_name=first_name;
	this.last_name=last_name;
	this.phone_number=phone_number;
	this.email=email;
	this.street=street;
	this.city=city;
	this.country=country;
}

//get input from the form and save it to the contacts array
var first_name=document.querySelector('[name="first_name"]').value;
var last_name=document.querySelector('[name="last_name"]').value;
var phone_number=document.querySelector('[name="phone_number"]').value;
var email=document.querySelector('[name="email"]').value;
var street=document.querySelector('[name="street"]').value;
var city=document.querySelector('[name="city"]').value;
var country=document.querySelector('[name="country"]').value;

//create a contact object using the constrctor
var name=new Contact(first_name,last_name,phone_number,email,street,city,country);

//save the contact
contacts.push(new Contact);

//print array of contacts
console.log('saved!')
//console,log(contacts[0].firstname)
}

//for the search option


/*Objects:
var danny=new Contact("Daniel","Mutumbo","0778842365","danmuts@gmail.com","Prince Charles Lane","Kampala","Uganda");
var jack= new Contact("Jack","Black","0702563627","jackblk@yahoo.co.uk",["Union Road","Kampala","Uganda"]);
*/