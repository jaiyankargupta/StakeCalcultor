function calculate() {
  var team1Name = capitalizeFirstLetter(document.getElementById("team1").value);
  var team1Rate = parseFloat(document.getElementById("rate1").value);
  var team1Amount = parseFloat(document.getElementById("amount1").value);

  var team2Name = capitalizeFirstLetter(document.getElementById("team2").value);
  var team2Rate = parseFloat(document.getElementById("rate2").value);
  var team2Amount = parseFloat(document.getElementById("amount2").value);

  if (
    (!team1Name && (!team2Name || isNaN(team2Rate) || isNaN(team2Amount))) ||
    (!team2Name && (!team1Name || isNaN(team1Rate) || isNaN(team1Amount)))
  ) {
    alert("Please fill in all fields for at least one team with valid inputs.");
    return;
  }

  clearMessages();

  if (!isNaN(team1Rate)) {
    showMessage(team1Rate, team1Name);
  }

  if (!isNaN(team2Rate)) {
    showMessage(team2Rate, team2Name);
  }

  var team1Stake = team1Rate * team1Amount;
  var pay2000team1 = team1Rate != 0 ? (2000 / team1Rate).toFixed(2) : 0;

  var team2Stake = team2Rate * team2Amount;
  var pay2000team2 = team2Rate != 0 ? (2000 / team2Rate).toFixed(2) : 0;

  var totalPayout = team1Stake + team2Stake;
  var totalamount = team1Amount + team2Amount;

  var resultMessages = [];

  if (team1Name) {
    resultMessages.push(`<p>${team1Name} Stake Payout: ${team1Stake}</p>`);
     resultMessages.push(`<p>If You Want to Win Rs 2000, then you should Pay ${team1Name}: ${pay2000team1}</p>`);
  }

  if (team2Name) {
    resultMessages.push(`<p>${team2Name} Stake Payout: ${team2Stake}</p>`);
     resultMessages.push(`<p>If You Want to Win Rs 2000, then you should Pay ${team2Name}: ${pay2000team2}</p>`);
  }

  resultMessages.push(`<p>Total Stake Amount: ${totalamount}</p>`);
  resultMessages.push(`<p>Total Stake Payout: ${totalPayout}</p>`);

  var resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = resultMessages.join("");
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function showMessage(rate, teamName) {
  var payAmount = (2000 / rate).toFixed(2);
  var message = `If You Want to Win Rs 2000, then you should Pay ${teamName}: ${payAmount}`;

  var messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageElement.classList.add("message");

  var rateInputId =
    teamName === capitalizeFirstLetter(document.getElementById("team1").value)
      ? "rate1"
      : "rate2";
  var rateInput = document.getElementById(rateInputId);
  rateInput.parentNode.insertBefore(messageElement, rateInput.nextSibling);
}

function clearMessages() {
  var existingMessages = document.querySelectorAll(".message");
  existingMessages.forEach(function (message) {
    message.remove();
  });
}

document.getElementById("rate1").addEventListener("input", function () {
  var team1Rate = parseFloat(this.value);
  if (!isNaN(team1Rate)) {
    clearMessages();
    showMessage(
      team1Rate,
      capitalizeFirstLetter(document.getElementById("team1").value)
    );
  } else {
    clearMessages();
  }
});

document.getElementById("rate2").addEventListener("input", function () {
  var team2Rate = parseFloat(this.value);
  if (!isNaN(team2Rate)) {
    clearMessages();
    showMessage(
      team2Rate,
      capitalizeFirstLetter(document.getElementById("team2").value)
    );
  } else {
    clearMessages();
  }
});
