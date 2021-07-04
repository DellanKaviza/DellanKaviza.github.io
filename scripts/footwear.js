function footwear() {
    //input
    let weather_type = document.getElementById('weather_select').value;
    let txt = "sandals"
    let txt_2 = "galoshes"
    let text_3 = "boots"

    //processing and output
    switch (weather_type) {
        case "hot":
            document.getElementById('result').innerHTML = txt;
            break;

        case "rain":
            document.getElementById('result').innerHTML = txt_2;
            break;

        case "snow":
            document.getElementById('result').innerHTML = text_3;
            break;

        
    }  

    
}