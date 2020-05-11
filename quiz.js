var index = 0;
var score = 0;
question = 0;
answer = [];
const test = [
  {
    question: " Which of the following is an integer?",
    answer: "a",
    options: { a: "2", b: 2.5, c: "'4'" },
  },
  {
    question: " How many bits makes one byte.",
    answer: "b",
    options: { a: 4, b: 8, c: 6 },
  },
  { question: " What is 2+2?", answer: "c", options: { a: 2, b: 3.6, c: 4 } },
  {
    question: " Man has how many legs?",
    answer: "c",
    options: { a: 4, b: 3, c: 2 },
  },
  {
    question: " Ondo State is locted in what part of Nigeria?",
    answer: "a",
    options: { a: "South West", b: "North", c: "South" },
  },
];

display(index, null);
function display(index, ans) {
  document
    .getElementById("optA")
    .classList.remove("bg-green", "bg-red", "isDisabled");
  document
    .getElementById("optB")
    .classList.remove("bg-green", "bg-red", "isDisabled");
  document
    .getElementById("optC")
    .classList.remove("bg-green", "bg-red", "isDisabled");

  document.getElementById("next").classList.add("isDisabled1");
  if (index >= test.length) {
    for (var i in test) {
      console.log(answer[i]);
      console.log(test[i].answer);
      //         if (test[i].answer == answer[i]) {
      //             // score++
      // // console.log(score)

      //         }
    }

    document.getElementById("btn").innerHTML = "";
    document.getElementById("title").innerHTML = "Bravo";

    document.getElementById("ans").innerHTML =
      "Your final score is " + score + "/" + test.length;
    console.log(score);

    var btnDiv = document.getElementById("btn");
    //Restart button
    var restart = document.createElement("button");
    btnDiv.appendChild(restart);
    restart.textContent = "Restart";
    restart.setAttribute("class", "restartBtn");
    restart.onclick = function () {
      location.reload();
    };

    document.getElementById("wrap").innerHTML =
      "You are done with this quiz, view your final score below";
  } else {
    document.getElementById("optA").innerHTML = test[index].options.a;
    document.getElementById("optB").innerHTML = test[index].options.b;
    document.getElementById("optC").innerHTML = test[index].options.c;
    question++;
    document.getElementById("temp").innerHTML = test[index].question;

    document.getElementById("qnum").innerHTML = "Question " + question
    index++;
  }
}

function answerChecker(index, ans) {
  console.log(ans);
  if (ans == test[index].answer) {
    score += 1;
    document.getElementById("optA").classList.add("isDisabled");
    document.getElementById("optB").classList.add("isDisabled");
    document.getElementById("optC").classList.add("isDisabled");

  } else {
    if (test[index].answer != "a" && test[index].answer != "b") {
      document.getElementById("optA").classList.add("bg-red");
      document.getElementById("optB").classList.add("bg-red");
    } else if (test[index].answer != "a" && test[index].answer != "c") {
      document.getElementById("optC").classList.add("bg-red");
      document.getElementById("optA").classList.add("bg-red");
    } else if (test[index].answer != "b" && test[index].answer != "c") {
      document.getElementById("optB").classList.add("bg-red");
      document.getElementById("optC").classList.add("bg-red");
    }
  }
  answer.push(ans);
  console.log(answer);
  if (test[index].answer == "a") {
    document.getElementById("optA").classList.add("bg-green");
  } else if (test[index].answer == "b") {
    document.getElementById("optB").classList.add("bg-green");
  } else if (test[index].answer == "c") {
    document.getElementById("optC").classList.add("bg-green");
  }

  document.getElementById("ans").innerHTML =
    "Answered correctly: " + score + " question(s).";

  document.getElementById("next").classList.remove("isDisabled1");
}
