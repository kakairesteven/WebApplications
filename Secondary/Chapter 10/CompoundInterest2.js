/*
Compound Interest2.js
Kakaire Steven
Compound Interest generation
*/

// This function generates a compound interest
function generateCompoundInterest(form) {
    var amount; // Accumulated value for each new year.
    var rate;   // compound interest rate.
    var full_duration;   // months of principal growth.
    var table; // Compound interest table.
    var interest;   // interest earned each month.
    var duration = 1; // The month being calculated

    amount = form.elements["amount"].valueAsNumber;
    rate = form.elements["rate"].valueAsNumber;
    full_duration = form.elements["duration"].valueAsNumber;

    table =
        "<table>" +
        "<tr><th>Month</th><th>Starting Value</th>" +
        "<th>Interest Earned</th><th>Ending Value</th></tr>";
    
        while (duration <= full_duration) {
            table += "<tr>";
            table += "<td>" + duration + "</td>";
            table += "<td> Ugshs." + amount.toFixed(2) + "</td>";
            interest = amount * (rate / 100);
            table += "<td> Ugshs." + interest.toFixed(2) + "</td>";
            amount += interest;
            table += "<td> Ugshs." + amount.toFixed(2) + "</td>";
            table += "</tr>";
            duration ++;
    } // end while loop

    table += "</table>";
    document.getElementById("result").innerHTML = table;
} // end generateCompoundInterest