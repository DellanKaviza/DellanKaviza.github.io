function fivetimes(){
    //Loop 
    let output1 = '';
    
    for (i=1; i<= 12; i++) {
        result1 = 5 * i;


        output1 += `5 x ${i} = ${result1}<br>`;
        
}
document.getElementById('display1').innerHTML = output1;

}