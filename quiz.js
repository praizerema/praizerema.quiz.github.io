
    var index = 0;
    var score = 0;
    answer = []
    const test = [
        { 'question': '1. Which of the following is an integer?', 'answer': 'a', 'options':{a: "2", b: 2.5, c: "'4'" } },
        { 'question': '2. How many bits makes one byte.', 'answer': 'b','options':{a: 4, b: 8, c: 6}},
        { 'question': '3. What is 2+2?', 'answer': 'c', 'options':{a: 2, b: 3.6, c: 4} },
        { 'question': '4. Man has how many legs?', 'answer': 'c', 'options':{a: 4, b: 3, c: 2} },
        { 'question': '5. Ondo State is locted in what part of Nigeria?', 'answer': 'a', 'options':{a:'South West', b: "North", c: "South"} },
       
    ]
  
    display(index, null)
    function display(index, ans) {

        document.getElementById('optA').classList.remove('bg-green', 'bg-red', 'isDisabled')
        document.getElementById('optB').classList.remove('bg-green', 'bg-red', 'isDisabled')
        document.getElementById('optC').classList.remove('bg-green', 'bg-red', 'isDisabled')

        document.getElementById('next').classList.add('isDisabled')
        if (index >= test.length) {

            for (var i in test) {
                var opt
                console.log(answer[i]);
                console.log(test[i].answer);
        //         if (test[i].answer == answer[i]) {
        //             // score++
        // // console.log(score)

        //         }

            }
            
            document.getElementById('btn').innerHTML = ''
            document.getElementById('title').innerHTML = 'Bravo'

            document.getElementById('ans').innerHTML = 'Your score is ' + score + '/' + test.length
            console.log(score)

            var btnDiv =document.getElementById('btn')
var restart= document.createElement('button')
btnDiv.appendChild(restart)
restart.textContent = 'Restart'
restart.setAttribute('class', 'restartBtn')
  restart.onclick = function(){location.reload() };

            document.getElementById('wrap').innerHTML = "You are done with this quiz, view your final score below"
        }
        else {
            console.log(opt)
            document.getElementById("optA").innerHTML = test[index].options.a
            document.getElementById("optB").innerHTML = test[index].options.b
            document.getElementById("optC").innerHTML = test[index].options.c

            document.getElementById('temp').innerHTML = test[index].question
           
            document.getElementById('ans').innerHTML = ''
            index++
        }

    }

    function answerChecker(index, ans) {
        console.log(ans)
        if (ans == test[index].answer) {
            score +=1

        } else {
            if(test[index].answer != 'a' && test[index].answer != 'b'){
        document.getElementById('optA').classList.add('bg-red')
        document.getElementById('optB').classList.add('bg-red')

            }
            else if (test[index].answer != 'a' && test[index].answer != 'c'){
document.getElementById('optC').classList.add('bg-red')
document.getElementById('optA').classList.add('bg-red')
            }
            else if (test[index].answer != 'b' && test[index].answer != 'c'){
                document.getElementById('optB').classList.add('bg-red')
                document.getElementById('optC').classList.add('bg-red')
                            }            
        }
        answer.push(ans)
        console.log(answer)
        if(test[index].answer ==  'a'){
                            console.log("meee")
                            document.getElementById('optA').classList.add('bg-green')
            }

            else if(test[index].answer == 'b'){
                    document.getElementById('optB').classList.add('bg-green')
            }
           else if(test[index].answer == 'c'){
                    document.getElementById('optC').classList.add('bg-green')
            
            }


        console.log(score)
        document.getElementById('ans').innerHTML = 'Answered correctly: ' + score +  ' question(s).'
      
        document.getElementById('next').classList.remove('isDisabled')
    }

// display (index)
//  function display (index){ 

// };
