


var DutchWords = [{ question : "Boek", answer : "Livro"}, {question: "Hoi", answer: "Ola"}, {question : "Hoe gaat het?", answer : "Oi como esta?"}];
var indexNumber = Math.floor(Math.random() * DutchWords.length)

var randomWords = DutchWords[indexNumber].question
// var randomWords = DutchWords[Math.floor(Math.random() * DutchWords.length)].question
var randomAnswer = DutchWords[indexNumber].answer

var points = 0;

// console.log(DutchWords[0].question);
// console.log(randomWords);
// console.log(`this is randomanswer ${randomAnswer}`)

function showRandomWord(){
    document.getElementById('randomword').innerHTML = randomWords;
}
console.log(showRandomWord())

function submitEvent(){
  document.getElementById('randomword').removeAttribute = '';
  document.getElementById('randomword').innerHTML = randomAnswer;
  console.log(randomWords)


  var inputAnswer = document.getElementById('input').value;
  console.log(inputAnswer)

  // make randomAnswer ignore case
  var inputA = inputAnswer.toLowerCase()
  var answerB = randomAnswer.toLowerCase()

    if (inputA === answerB){
    alert('Yes!!!!')
    // var points = document.getElementById('pointBox').innerHTML = points++
      points++
    document.getElementById('pointBox').innerHTML = `1 extra point!`

    } else {
      alert('try again')
    }
}

function nextEvent(){
// showRandomWord();

  location.reload();
//when we submit we want to go to the next questio without refreshing the page.
  //next // QUESTion

}


var inputAnswer = document.getElementById('input').value;
console.log(inputAnswer)
