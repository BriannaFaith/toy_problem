function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates
    const PAYE_THRESHOLD = 24000;
    const PAYE_RATE_1 = 0.1;
    const PAYE_RATE_2 = 0.25;

    // Constants for deductions
    const NHIF_RATE = 0.015;
    const NSSF_RATE = 0.06;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let paye = 0;
    if (grossSalary > PAYE_THRESHOLD) {
        paye = PAYE_THRESHOLD * PAYE_RATE_1 + (grossSalary - PAYE_THRESHOLD) * PAYE_RATE_2;
    }

    // Calculate NHIF Deductions
    const nhifDeductions = grossSalary * NHIF_RATE;

    // Calculate NSSF Deductions
    const nssfDeductions = grossSalary * NSSF_RATE;

    // Calculate Net Salary
    const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;

    // Return the results
    return {
        grossSalary,
        paye,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}

// Example usage:
const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Display the results
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax):", salaryDetails.paye);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);
