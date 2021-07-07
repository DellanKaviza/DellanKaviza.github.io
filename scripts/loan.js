function doPayment(){
    princ_amnt = document.getElementById('amount_borrowed').value;
    intr_rates = document.getElementById('interest_rates').value;
    num_of_yrs = document.getElementById('number_of_years').value;
    paymnts_per_yr = document.getElementById('payments_per_year').value;
    num_of_pays = document.getElementById('number_of_payments').value; 
    
    principal = parseFloat(princ_amnt);
    annualRate = parseFloat(intr_rates);
    years = parseFloat(num_of_yrs);
    periodsPerYear = parseFloat(num_of_pays);

    p_values = computePayment(principal, annualRate, years, periodsPerYear);
    p_value = p_values.toFixed(2);

    document.getElementById('result1').innerHTML = "$"+p_value;

}
function doBalance(){
    princ_amnt = document.getElementById('amount_borrowed').value;
    intr_rates = document.getElementById('interest_rates').value;
    num_of_yrs = document.getElementById('number_of_years').value;
    paymnts_per_yr = document.getElementById('payments_per_year').value;
    num_of_pays = document.getElementById('number_of_payments').value; 
    
    principal = parseFloat(princ_amnt);
    annualRate = parseFloat(intr_rates);
    years = parseFloat(num_of_yrs);
    periodsPerYear = parseFloat(paymnts_per_yr);
    numberOfPaymentPaidToDate = parseFloat(num_of_pays);


    b_values = computeBalance (principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate);
    b_value = b_values.toFixed(2);

    document.getElementById('result2').innerHTML = "$"+b_value;


}
function computePayment (principal, annualRate, years, periodsPerYear) {
    a = principal;
    r = annualRate/12;
    n = years*12;
    d = periodsPerYear;

    p = (a*r)/ (1-(1+r)**-n)

    return p;

}
function computeBalance (principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate) {
    a = principal;
    r = annualRate/12;
    n = years*12;
    p = periodsPerYear;
    d = numberOfPaymentPaidToDate;

    b = ((a*(1+r)**d) - (p*((1+r)**d - 1) / r))

    return b;


}