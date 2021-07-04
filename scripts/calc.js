function calc(){
			//input
			let digit_1 = document.getElementById('dig_1').value;
			let digit_2 = document.getElementById('dig_2').value;
            let sign_of_operator = document.getElementById('sign').value;
            let answered_value = document.getElementById('ans').value;
            //let check_value = 0;
            let txt_correct = "Correct! 🏆";
            let txt_incorrect = "Incorrect 😢";

            //processing and output
            a = parseFloat(digit_1);
            b = parseFloat(digit_2);
            c = parseFloat(answered_value);

            

            switch(sign_of_operator){
                case "+":
                    check_value_add = a + b;
                    if (check_value_add == c) {
                        document.getElementById('result').innerHTML = txt_correct;
                        break;
                    }else {
                        document.getElementById('result').innerHTML = txt_incorrect;
                        break;
                    }
                
                case "-":                    
                    check_value_minus = a - b;
                    if (check_value_minus == c) {
                        document.getElementById('result').innerHTML = txt_correct;
                        break;
                    }else {
                        document.getElementById('result').innerHTML = txt_incorrect;
                        break;
                    }                   

                case "*":                    
                    check_value_product = a * b;
                    if (check_value_product == c) {
                        document.getElementById('result').innerHTML = txt_correct;
                        break;
                    }else {
                        document.getElementById('result').innerHTML = txt_incorrect;
                        break;
                    }

                case "/":                    
                    check_value_devide = a / b;
                    if (check_value_devide == c) {
                        document.getElementById('result').innerHTML = txt_correct;
                        break;
                    }else {
                        document.getElementById('result').innerHTML = txt_incorrect;
                        break;
                    }

 


            }


			//processing
            
		

			//output
			
}