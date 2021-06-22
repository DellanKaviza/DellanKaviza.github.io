function calc(){
			//input
			let digit_1 = document.getElementById('dig_1').value;
			let digit_2 = document.getElementById('dig_2').value;
            let sign_of_operator = document.getElementById('sign').value;
            let answered_value = document.getElementById('ans').value;
            //let check_value = 0;
            let txt_correct = "correct";
            let txt_incorrect = "incorrect";

            //processing and output
            a = parseFloat(digit_1);
            b = parseFloat(digit_2);
            c = parseFloat(answered_value);

            

            switch(sign_of_operator){
                case "+":
                    check_value = a + b;
                    if (check_value == c) {
                        document.getElementById('result').innerHTML = txt_correct;
                    }else {
                        document.getElementById('result').innerHTML = txt_incorrect;
                    }
                
                case "-":                    
                    check_value = a - b;
                    if (check_value == c) {
                        document.getElementById('result').innerHTML = txt_correct;
                    }else {
                        document.getElementById('result').innerHTML = txt_incorrect;
                    }                   

                case "*":                    
                    check_value = a * b;
                    if (check_value == c) {
                        document.getElementById('result').innerHTML = txt_correct;
                    }else {
                        document.getElementById('result').innerHTML = txt_incorrect;
                    }

                case "/":                    
                    check_value = a / b;
                    if (check_value == c) {
                        document.getElementById('result').innerHTML = txt_correct;
                    }else {
                        document.getElementById('result').innerHTML = txt_incorrect;
                    }

 


            }


			//processing
            
		

			//output
			
}