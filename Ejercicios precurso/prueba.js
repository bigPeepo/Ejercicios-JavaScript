let scoreboardPannel = [];
scoreboard = [1, 2, 3];
function bingo() {
  for (let i = 0; i < scoreboard.length; i++) {
    scoreboardPannel.push(`Round ${i + 1}: Total SCORE ${scoreboard[0]}\n`);
  }
  console.log("Scoreboard " + scoreboard);
  console.log("SB Pannel" + scoreboardPannel);
  alert(scoreboardPannel.join(" "));
}

bingo();
