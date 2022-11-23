


let countriesDropDown = document.querySelector("#country-select");


$.getJSON('https://api.npoint.io/66866aef2c21692fe055',function(data){

  let country;
  let id;

  let out = "";
  out += `<option value="">Choose a country:</option>`;

  $.each(data, function(i, name){
    country = name.country;
    id = name.id;
    out += `<option value="${id}">${country}</option>`
    
    console.log(`<option value="${id}">${country}</option>`);
  });

  countriesDropDown.innerHTML = out; 
});


function validation(){

let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let bDate = document.getElementById("b_date").value;
let error = document.getElementById("error-message");
console.log(bDate);
let text;

error.style.padding = "10px";
console.log(fname);
console.log(fname.length);
if(fname.length === 0){
text = "The first name is mandatory";
error.innerHTML = text;
return false;
}

if(lname.length === 0){
text = "The last name is mandatory";
error.innerHTML = text;
console.log(error);
return false;
}


  let dateString = document.getElementById('b_date').value;
  let myDate = new Date(dateString);
  let today = new Date();
  if ( myDate > today ) { 
    text = "Please Enter valid Date";
    error.innerHTML = text;
    return false; 
  }



let regex = /^\(?([0-9]{3})\)?[-]([0-9]{3})[-]([0-9]{4})$/;
if(!phone.match(regex)){
text = "Please Enter valid Phone Number";
error.innerHTML = text;
return false;
}

if(email.length === 0){
text = "The email is mandatory";
error.innerHTML = text;
return false;
}
else if(email.indexOf("@") == -1 || email.length < 6){
console.log("tuk sam");
text = "Please Enter valid Email";
error.innerHTML = text;
return false;
}


alert("Form Submitted Successfully!");
return true;

}  

function getCities(country){

let citiesDropDown = document.querySelector("#cities");

if(country.trim()===""){
citiesDropDown.disabled = true;
citiesDropDown.selectedIndex = 0;
return false;
}

$.getJSON('https://api.npoint.io/66866aef2c21692fe055',function(data){


let cities;
$.each(data, function(i, name){

  if(country == name.id){
  cities = name.cities;
  }

})

let out = "";
out += `<option value="">Choose a city:</option>`;
for(let city of cities){
out += `<option value="${city}">${city}</option>`
}



citiesDropDown.innerHTML = out;
citiesDropDown.disabled = false;

});
}

