console.log('Welcome to Word Scramble');

const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const button = document.querySelector('.button');

let play = false;

let newWords = "";
let randWords = "";

button.addEventListener('click', function () {
    if (!play) {
        play = true;
        button.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split(""));
        // console.log(randWords.join(""));
        msg.innerHTML = `Guess the Computer Language: ${randWords}`;
    } else {
        let word = guess.value;
        if (word === newWords) {
            play = false;
            msg.innerHTML = `<h2 class="text-success"><strong>Awesome 🤩 It's Correct. It is ${newWords}</strong></h2>`;
            button.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        } else {
            msg.innerHTML = `<h2 class="text-danger"><strong>Opps ☹️!! It's Incorrect. Please try again ${randWords}</strong></h2>`;
            guess.value = "";
        }
    }
});

//! Set the Programing Languages which user have to guess 
let sWords = ['python', 'django', 'flask', 'groovy', 'javascript', 'typescript', 'c++', 'matlab', 'php', 'kotlin', 'perl', 'go', 'java', 'julia', 'C#', 'html', 'css', 'reactjs', 'nodejs', 'angular', 'mongodb', 'swift', 'sql', 'ruby', 'shell', 'bash'];

const createNewWords = () => {
    let randNum = Math.floor(Math.random() * sWords.length);
    // console.log(randNum);
    let tempWords = sWords[randNum];
    // console.log(tempWords.split(""));
    return tempWords;
}

const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        console.log(temp);

        //! Shuffle the Words
        let scramble = Math.floor(Math.random() * (i + 1));
        // console.log(i);
        // console.log(scramble);

        //! Swapping 
        arr[i] = arr[scramble];
        arr[scramble] = temp;
    }
    return arr;
};

