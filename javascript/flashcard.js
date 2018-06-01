<<<<<<< HEAD
var Words = ["Boek", "Hoi", "Hoe gaat het?"];
var randomWords = Math.random(Words);
console.log(randomWords);
=======



var words = ["Boek", "Hoi", "Hoe gaat het?"];

var randomWords = words[Math.floor(Math.random() * words.length)]
console.log(randomWords);

function showRandomWord(){
    document.getElementById('randomword').innerHTML = randomWords;
}
console.log(showRandomWord())
=======
>>>>>>> 863da7a9f4ba7ed306ae9062b583569de7bc2ae4
