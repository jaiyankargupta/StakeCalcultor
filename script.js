function calculate() {
  
    var team1Name = capitalizeFirstLetter(document.getElementById('team1').value);
    var team1Rate = parseFloat(document.getElementById('rate1').value);
    var team1Amount = parseFloat(document.getElementById('amount1').value);

    var team2Name = capitalizeFirstLetter(document.getElementById('team2').value);
    var team2Rate = parseFloat(document.getElementById('rate2').value);
    var team2Amount = parseFloat(document.getElementById('amount2').value);

    if ((!team1Name && (!team2Name || isNaN(team2Rate) || isNaN(team2Amount))) ||
        (!team2Name && (!team1Name || isNaN(team1Rate) || isNaN(team1Amount)))) {
        alert("Please fill in all fields for at least one team with valid inputs.");
        return;
    }

    var team1Stake = team1Rate * team1Amount;
    var team2Stake = team2Rate * team2Amount;
    var pay2000team1 = (team1Rate != 0) ? 2000.0 / team1Rate : 0;
    var pay2000team2 = (team2Rate != 0) ? 2000.0 / team2Rate : 0;

    
    var resultMessages = [];
    if (team1Name) {
        resultMessages.push(`<p>${team1Name} Stake Payout: ${team1Stake}</p>`);
        resultMessages.push(`<p>If You Want to Win Rs 2000, then you should Pay: ${pay2000team1}</p>`);
    }
    if (team2Name) {
        resultMessages.push(`<p>${team2Name} Stake Payout: ${team2Stake}</p>`);
        resultMessages.push(`<p>If You Want to Win Rs 2000, then you should Pay: ${pay2000team2}</p>`);
    }

   
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = resultMessages.join('');
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
