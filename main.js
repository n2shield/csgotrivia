window.onload = function() {

  var questionArea = document.getElementsByClassName("questions")[0],

      answerArea = document.getElementsByClassName("answers")[0],
      checker = document.getElementsByClassName("checker")[0],
      current = 0,


      quizContent = {
          "What team won the first major for North America in 10 years?": [
              "Team 3D", "Optic Gaming", "Cloud 9",
              "Team Liquid", 2],
          "Who was HLTV.Org's best player in 2017": [
              "Stewie2k", "S1mple", "Olofmeister",
              "Coldzera", 3],
          "Where was the first major chamionship of 2018 held?": [
              "Kaotwice", "Boston", "Sal Palo",
              "Los Angeles", 1],
          "What was the name of the second version of Counter-Strike?": [
              "Source",
              "1.6", "Global Offensive",
              "Day of Defeat", 0],
          "Which of the following players knifed KSharp in an official match?": [
              "Potti", "Heaton",
              "Sunman", "fNx", 2],
          "What is North America's most popular online league?": [
              "FaceIT", "CEVO",
              "Club Conflict", "ESEA", 3],
          "Which matchup was the longest offical LAN single match ever?" : [
              "Cloud 9 vs SK", "SK vs FNATIC", "VP vs NiP", "Zex vs Team 3D", "PixelFire vs DenDD", "Envyus vs Team Liquid",
               4],
          "Which CSGO Organization has the most major championships?" : ["FNATIC", "Cloud 9", "Virtus.Pro", "Team LDLC", 0]
      }


function loadQuestion(curr) {

  var question = Object.keys(quizContent)[curr]

  questionArea.innerHTML = ""
  questionArea.innerHTML = question
}

function loadAnswers(curr) {
  
  var answers = quizContent[Object.keys(quizContent)[curr]]
      
  answerArea.innerHTML = ""
      
  for ( i = 0; i < answers.length - 1; i += 1) {
      var createDiv = document.createElement("div"),
          text = document.createTextNode(answers[i])
      createDiv.appendChild(text)
          
      createDiv.addEventListener("click", checkAnswer(i, answers))
      answerArea.appendChild(createDiv)
  }
}

function checkAnswer(i, arr) {
  return function() {
      var userAnswer = i,
          correctAnswer = arr[arr.length - 1]
      if (userAnswer === correctAnswer) {
          addChecker(true)
      } else {
          addChecker(false)
      }
      if (current < Object.keys(quizContent).length - 1) {
          current += 1
          loadQuestion(current)
          loadAnswers(current)
      } else {
          questionArea.innerHTML = "Congrats! Your correct response is green, incorrect is red."
          answerArea.innerHTML = ""
      }
  }
}

function addChecker(bool) {
  var createDiv = document.createElement("div"),
      txt = document.createTextNode(current + 1)
  createDiv.appendChild(txt)
  if (bool) {
      createDiv.className += "correct"
      checker.appendChild(createDiv)
  } else {
      createDiv.className += "false"
      checker.appendChild(createDiv)
  }
}
loadQuestion(current)
loadAnswers(current)
}

