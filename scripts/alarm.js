function alarm(){
			//input
            var now = new Date();
            var month = now.getMonth();
            var dayOfMonth = now.getDate();
            var dayOfWeek = now.getDay();
			


			//processing
            if (month == 0 && dayOfMonth == 1) {
                document.getElementById('result').innerHTML = "Sleep in.";
            }else if (month == 6 && dayOfMonth == 4) {
                document.getElementById('result').innerHTML = "Sleep in.";
            } else if (month == 11 && dayOfMonth == 25) {
                document.getElementById('result').innerHTML = "Sleep in.";
            } else if (dayOfWeek == 0 || dayOfWeek == 6) {
                document.getElementById('result').innerHTML = "Sleep in.";
            } else  {
                document.getElementById('result').innerHTML = "Get UP!.";
            }






			




			



		}
