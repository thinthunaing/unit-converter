function displayHolder(type){
    //container that store inputs
    const units = document.getElementsByClassName('content-container');
    
    //set display none to all
    for(let i=0; i<units.length; i++){
        units[i].style.display = 'none';
        console.log(units[i])
    }
    //set disply flex the current selector
    document.getElementById(type).style.display='flex';
    
}

//clear function
function clearLength(){
   //select all inputs
    const input= document.querySelectorAll('input');
    console.log(input)
    //set empty to all input
    for(let i=0; i<input.length;i++){
        input[i].value = '';
    }
}

//length converter
function lengthConverter(type,value){
  //change vlaue to floating point
    value = parseFloat(value);
    var ipFeet = document.querySelector("#ipFeet");
    var ipMeters = document.querySelector("#ipMeters");
    var ipInches = document.querySelector("#ipInches");
    var ipKilometers = document.querySelector("#ipKilometers");
  
    if (type == "ipFeet") {
      ipMeters.value = (value / 3.2808).toFixed(2);
      ipInches.value = (value * 12).toFixed(2);
      ipKilometers.value = (value / 3280.8).toFixed(5);
    }
    if (type == "ipMeters") {
      ipFeet.value = (value * 3.2808).toFixed(2);
      ipInches.value = (value * 39.370).toFixed(2);
      ipKilometers.value = (value / 1000).toFixed(5);
    }
    if (type == "ipInches") {
      ipFeet.value = (value * 0.083333).toFixed(3);
      ipMeters.value = (value / 39.370).toFixed(3);
      ipKilometers.value = (value / 39370).toFixed(6);
    }
    if (type == "ipKilometers") {
      ipFeet.value = (value * 3280.8).toFixed();
      ipMeters.value = (value * 1000).toFixed();
      ipInches.value = (value * 39370).toFixed();
    }
}

function weightConverter(type, value) {
    //change vlaue to floating point
    value = parseFloat(value);
    var ipPounds = document.querySelector("#ipPounds");
    var ipKilograms = document.querySelector("#ipKilograms");
    var ipOunces = document.querySelector("#ipOunces");
    var ipGrams = document.querySelector("#ipGrams");
    if (type == "ipPounds") {
      ipKilograms.value = (value / 2.2046).toFixed(2);
      ipOunces.value = (value * 16).toFixed(2);
      ipGrams.value = (value / 0.0022046).toFixed();
    }
    if (type == "ipKilograms") {
      ipPounds.value = (value * 2.2046).toFixed(2);
      ipOunces.value = (value * 35.274).toFixed(2);
      ipGrams.value = (value * 1000).toFixed();
      inputStones.value = (value * 0.1574).toFixed(3);
    }
    if (type == "ipOunces") {
      ipPounds.value = (value * 0.062500).toFixed(4);
      ipKilograms.value = (value / 35.274).toFixed(4);
      ipGrams.value = (value / 0.035274).toFixed(1);
  
    }
    if (type == "ipGrams") {
      ipPounds.value = (value * 0.0022046).toFixed(4);
      ipKilograms.value = (value / 1000).toFixed(4);
      ipOunces.value = (value * 0.035274).toFixed(3);
    }
  }


function speedConverter(type, value) {
    console.log(type)
    console.log(value)
     //change vlaue to floating point
    value = parseFloat(value);
    var ipMPH = document.querySelector("#ipMPH");
    var ipKPH = document.querySelector("#ipKPH");
    if (type == "ipMPH") {
      ipKPH.value = (value * 1.609344).toFixed(2);
    }
    if (type == "ipKPH") {
      ipMPH.value = (value / 1.609344).toFixed(2);
    }
  }

  function tempConverter(type, value) {
     //change vlaue to floating point
    value = parseFloat(value);
    var ipFahrenheit = document.querySelector("#ipFahrenheit");
    var ipCelsius = document.querySelector("#ipCelsius");
    var ipKelvin = document.querySelector("#ipKelvin");
    if (type == "ipFahrenheit") {
      ipCelsius.value = ((value - 32) / 1.8).toFixed(2);
      ipKelvin.value = (((value - 32) / 1.8) + 273.15).toFixed(2);
    }
    if (type == "ipCelsius") {
      ipFahrenheit.value = ((value * 1.8) + 32).toFixed(2);
      ipKelvin.value = ((value) + 273.15).toFixed(2);
    }
    if (type == "ipKelvin") {
      ipFahrenheit.value = (((value - 273.15) * 1.8) + 32).toFixed(2);
      ipCelsius.value = ((value) - 273.15).toFixed(2);
    }
  }
  