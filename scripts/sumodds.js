function sumOdds(){
    //input
    int_input = document.getElementById('interger_input').value;
    output_value = 0;

    //processing
    int_value = parseFloat(int_input)

    for (i = 1; i <= int_value; i +=2){
        output_value += i



    }

    //output
    document.getElementById('result').innerHTML = output_value;



		}