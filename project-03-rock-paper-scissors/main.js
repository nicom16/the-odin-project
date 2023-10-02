/* This code is written for NodeJS due to personal compatibility issues.
 * In order to create a dependencies free code, a command line argument is used to pass values to the code instead of a more classical prompt.
 */

function main() {
  let choices = ["Rock", "Paper", "Scissors"];

  let userChoiceId = parseInt(process.argv[2]);
  let userChoice = choices[userChoiceId];
  
  let aiChoice = choices[Math.floor(Math.random() * choices.length)];

  switch (userChoice) {
    case "Rock":
      if (aiChoice === "Scissors") {
        console.log("AI selected Scissors, you win!");
      } else if (aiChoice === "Paper") {
        console.log("AI selected Paper, you lose!");
      } else if (aiChoice === "Rock") {
        console.log("AI selected Rock, it's a draw!");
      }
      break;
    case "Paper":
      if (aiChoice === "Rock") {
        console.log("AI selected Rock, you win!");
      } else if (aiChoice === "Scissors") {
        console.log("AI selected Scissors, you lose!");
      } else if (aiChoice === "Paper") {
        console.log("AI selected Paper, it's a draw!");
      }
      break;
    case "Scissors":
      if (aiChoice === "Paper") {
        console.log("AI selected Paper, you win!");
      } else if (aiChoice === "Rock") {
        console.log("AI selected Rock, you lose!");
      } else if (aiChoice === "Scissors") {
        console.log("AI selected Scissors, it's a draw!");
      }
      break;
    default: 
      break;
  }
}

main();
