var movies = ["SnowWhite", "PeterPan", "LionKing", "Cinderella", "Alladin", "Bambi", "Pinocchio", "Maleficent"]
        var wordChosen = ""
        var underScore = [];
        var rightWord = []
        var wrongWord = []
        var win = 0;
        var maxGuess = 10;
        var wins = 0;
        //DOM 
        var computerWord = document.getElementById("under-score")
        var guessRemain = document.getElementById("guesses-remaining")
        var alredyGuessed = document.getElementById("already-guessed")
        var winning = document.getElementById("wins")

        guessRemain.innerHTML = maxGuess;
        winning.innerHTML = win

        reStartGame()
 
        //function to Start
        function reStartGame() {
            maxGuess = 10;
            underScore = []
            rightWord = []
            wrongWord = []
            console.log("Restart Game", maxGuess, underScore);
            guessRemain.innerText = maxGuess
            computerWord.innerHTML = underScore
            alredyGuessed.innerText = wrongWord
            var index = Math.floor(Math.random() * movies.length);
            wordChosen = movies[index].toLowerCase();

            console.log(wordChosen);

            for (var i = 0; i < wordChosen.length; i++) {
                underScore.push("_ ");
            }


            document.getElementById("under-score").innerHTML = underScore;
            document.getElementById("guesses-remaining").innerHTML = maxGuess;
            document.getElementById("already-guessed").innerHTML = "";

        }

    //Press key to start
        document.onkeyup = function(event) {
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            if (wordChosen.indexOf(userGuess) > -1) {
                // add to the right words array
                rightWord.push(userGuess);
                console.log(wordChosen.indexOf(userGuess))

                for (var i = 0; i < wordChosen.length; i++) {

                    if (wordChosen[i] == userGuess) {
                        console.log(wordChosen[i], userGuess)

                        underScore[i] = userGuess;
                        console.log(underScore)
                        computerWord.innerHTML = underScore.join(" ");
                    }
                }
                console.log(underScore.join('') == wordChosen)
                if (underScore.join("") == wordChosen) {
                    win++
                    wins++
                    winning.innerText = win;
                    alert("You Win! ")
                    reStartGame();
                }

            }
            else {
                wrongWord.push(userGuess);
                alredyGuessed.innerHTML = wrongWord;
                maxGuess--;
                guessRemain.innerHTML = maxGuess
                if (maxGuess == 0) {
                   alert("You Lose, The word is " + wordChosen)
                    reStartGame();
                }
            }
        }
      


