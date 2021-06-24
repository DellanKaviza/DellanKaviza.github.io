function fixedloops(){
    //Loop 1 was an infinite loop or 0 would alway be lower than 2 if we do not increment
    let output1 = '';
    let i = 0;
    while (i < 2) {
        output1 += `Part 1:${i}<br>`;
        i++
}
document.getElementById('display1').innerHTML = output1;

    //loop would never run as zero will never be greater than 3 
    var output2 = '';
    for (let j = 0; j < 3; j++) {
    if (j !== 2) {
        output2 += `Part 2:${j}, `;
    }
    else {
        output2 += `Part 2:${j}`;
    }  
    }
document.getElementById('display2').textContent = output2;

    //loop 3 needed us to use ; than the , 
    let output3 = '';
    for (let k = 0; k < 4; k++) {
    output3 += k + " ";
    }
    document.getElementById('display3').textContent = output3;

    //loop 4
    let balance = 1000;
    const rate = .10;
    let n = 30;
    for (let s = 0; s < n; s++){
        interest = balance * rate;
        balance += interest;
    }

document.getElementById('display4').textContent = balance;   




		}