function discount(){
			//input
            var dayOfWeek = new Date().getDay();
			sub_total_input = document.getElementById('sub_total').value;
			


			//processing and output
			sub_total = parseFloat(sub_total_input);

            if (sub_total > 50 && (dayOfWeek == 2 || dayOfWeek == 3)){

                dis = sub_total - (sub_total * 0.1);
                to_pay1 = dis + (dis * 0.06)
                to_pay = to_pay1.toFixed(2)
                document.getElementById('result').innerHTML = "$"+to_pay;
            } else {
                to_pay1 = sub_total + (sub_total * 0.06)
                to_pay = to_pay1.toFixed(2)
                document.getElementById('result').innerHTML = "$"+to_pay;
            }

			
			
		
			



		}


