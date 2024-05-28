document.getElementById("start-game").addEventListener("click", function() {
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("start-game").classList.add("hidden");
  });
  
  document.querySelectorAll(".choice").forEach(function(button) {
    button.addEventListener("click", function() {
      let playerChoice = this.getAttribute("data-choice");
      playGame(playerChoice);
    });
  });
  
  document.getElementById("play-again").addEventListener("click", function() {
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
  });
  
  function playGame(playerChoice) {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let computer =
      computerChoice === 1
        ? "rock"
        : computerChoice === 2
        ? "paper"
        : "scissors";
  
    let result =
      playerChoice === computer
        ? "Tie game!"
        : playerChoice === "rock" && computer === "paper"
        ? `Player: ${playerChoice}\nComputer: ${computer}\nComputer wins!`
        : playerChoice === "paper" && computer === "scissors"
        ? `Player: ${playerChoice}\nComputer: ${computer}\nComputer wins!`
        : playerChoice === "scissors" && computer === "rock"
        ? `Player: ${playerChoice}\nComputer: ${computer}\nComputer wins!`
        : `Player: ${playerChoice}\nComputer: ${computer}\nPlayer wins!`;
  
    document.getElementById("game-result").innerText = result;
    document.getElementById("game").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
  }
  