// Import the prompt-sync library
const promptSync = require('prompt-sync');
const prompt = promptSync();

// Prompt the user to  input basic salary
const basicSalary = parseFloat(prompt('Enter the basic salary: '));

let bonus = 0;
let allowances = 0;
let relief = 5000 + 9000 + 2400;

// Call the grossIncome function to calculate the gross income
const grossIncomeValue = grossIncome(basicSalary);

// grossIncome composition
function grossIncome(basicSalary, ...allowances) {
    let sum = basicSalary;
    for (let allowance of allowances) {
        sum += allowance;
    }
    return sum;
}

// Call the calculateNHIF function to calculate NHIF deduction
const nhifDeduction = calculateNHIF(grossIncomeValue);

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

// Call the NSSF function to calculate NSSF deduction
const nssfDeduction = NSSF(grossIncomeValue);

//NSSF deduction based on pensionable pay
function NSSF(pensionablePay) {
    return pensionablePay * 0.06;
}


// Call the taxablePay function to calculate taxable pay
const taxableIncome = taxablePay(grossIncomeValue, nhifDeduction, nssfDeduction);

//Deducting specified amounts from gross income
function taxablePay(grossIncome, ...deductions) {
    for (let deduction of deductions) {
        grossIncome -= deduction;
    }
    return grossIncome;
}

// Call the PAYEE function to calculate PAYEE deduction
const payeeDeduction = PAYEE(taxableIncome);

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

// Call the netPay function to calculate net pay
const netSalary = netPay(taxableIncome, payeeDeduction);

//net pay after deducting PAYEE from taxable pay
function netPay(taxablepay, payee) {
    return taxablepay - payee;
}


console.log(`Taxable Income: ${taxableIncome}`);
console.log(`Net Pay: ${netSalary}`);