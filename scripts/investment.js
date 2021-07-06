function doFV(){
    //input
    amnt_invested = document.getElementById('amntInvested').value;
    annual_rate = document.getElementById('annualRate').value;
    years = document.getElementById('number_of_years').value;
    periods_per_year = document.getElementById('periods_per_year').value;

    principal_value = parseFloat(amnt_invested);
    annual_rate_value = parseFloat(annual_rate);
    years_value = parseFloat(years);
    periods_value = parseFloat(periods_per_year);

    

    fValue = computeFutureValue(principal_value, annual_rate_value, years_value, periods_value);

    document.getElementById('result').innerHTML = "$"+fValue;

}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {

    a = principal;
    r = annualRate/12;
    n = years * 12;
    s = periodsPerYear;


    f = a *((1 + r)**n);
    return f;
    

}

function resetFields() {
    document.getElementById('amntInvested').value = "";
    document.getElementById('annualRate').value = "";
    document.getElementById('number_of_years').value = "";
    document.getElementById('periods_per_year').value = "";




}