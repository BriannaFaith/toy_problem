// grossIncome composition
function grossIncome(basicSalary, ...allowances) {
    let sum = basicSalary;
    for (let allowance of allowances) {
        sum += allowance;
    }
    return sum;
}
// NHIF deduction based on gross pay
function calculateNHIF(grossPay) {
    //NHIF rates
    if (grossPay <= 5999) {
        return 150;
    } else if (grossPay <= 7999) {
        return 300;
    } else if (grossPay <= 11999) {
        return 400;
    } else if (grossPay <= 14999) {
        return 500;
    } else if (grossPay <= 19999) {
        return 600;
    } else if (grossPay <= 24999) {
        return 750;
    } else if (grossPay <= 29999) {
        return 850;
    } else if (grossPay <= 34999) {
        return 900;
    } else if (grossPay <= 39999) {
        return 950;
    } else if (grossPay <= 44999) {
        return 1000;
    } else if (grossPay <= 49999) {
        return 1100;
    } else if (grossPay <= 59999) {
        return 1200;
    } else if (grossPay <= 69999) {
        return 1300;
    } else if (grossPay <= 79999) {
        return 1400;
    } else if (grossPay <= 89999) {
        return 1500;
    } else if (grossPay <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}
//NSSF deduction based on pensionable pay
function NSSF(pensionablePay) {
    return pensionablePay * 0.06;
}
//Deducting specified amounts from gross income
function taxablePay(grossIncome, ...deductions) {
    for (let deduction of deductions) {
        grossIncome -= deduction;
    }
    return grossIncome;
}
//PAYEE deduction  against taxable pay levels
function PAYEE(taxablepay) {
    if (taxablepay <= 24000) {
        return taxablepay * 0.1;
    } else if (taxablepay <= 32333) {
        return taxablepay * 0.25;
    } else if (taxablepay > 32333) {
        return taxablepay * 0.3;
    }
}

//net pay after deducting PAYEE from taxable pay
function netPay(taxablepay, payee) {
    return taxablepay - payee;
}
