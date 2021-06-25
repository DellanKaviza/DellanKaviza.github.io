function doInputOutput(){
    temperature = document.getElementById('temp').value;
    windspeed = document.getElementById('windSpeed').value;

    tempValue = parseFloat(temperature);
    windSpeedValue = parseFloat(windspeed);

    windchill = windChill(tempValue, windSpeedValue);

    document.getElementById('result').innerHTML = windchill;


}
function windChill(tempF, speed){
    if (tempF <=50 && speed > 3){
        f = 35.74 + (0.6215 * tempF) -(35.75 * speed**0.16) + (0.4275 * tempF * speed**0.16);
        return f;

    }else {
        alert('Temperature must be lower than 50 and speed greater than 3')
    }


}