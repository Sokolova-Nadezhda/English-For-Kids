
let switcher = document.getElementsByClassName('switch_slider')[0];

switcher.addEventListener('click', () => {
    switcher.classList.toggle('train');
    switcher.classList.toggle('play');

    let categoryCards = document.querySelectorAll('.category_card.flipper');

    categoryCards.forEach((card) => {
        card.getElementsByClassName('category_name')[0].classList.toggle('play_card');
        card.getElementsByClassName('flip_button')[0].classList.toggle('play_card');
        card.getElementsByClassName('image')[0].classList.toggle('play_image');
    })

    let buttons = document.getElementsByClassName('buttons_and_markers_wrapper')[0];
    buttons.classList.toggle('block');

    if ((switcher.classList.contains('play'))&&(!repeat.hasAttribute('disabled'))) {
        repeat.setAttribute('disabled', 'true');
        start.removeAttribute('disabled');
    }

    if (switcher.classList.contains('train')) {
        document.querySelectorAll('.disabled').forEach((elem) => {elem.classList.remove('disabled')})
        stats_markers.innerHTML = '';
    }

    start.addEventListener('click', () => {

        let cards = document.querySelectorAll('.front');
        let cardsNames = document.querySelectorAll('.category_name');
        let wordsForGame = [];
        let word = '';

        if ((!start.hasAttribute('disabled')) ) {

            start.setAttribute('disabled', 'true');
            repeat.removeAttribute('disabled');

            cardsNames.forEach((card) => {
                wordsForGame.push(card.innerHTML);
            })
            wordsForGame.pop(); 

            word = VoicingWords(wordsForGame);
            let endGameCounter = 8;
            let fail;

            cards.forEach((card) => {
                card.onclick = (e) => {
                    if ((switcher.classList.contains('play'))&&(start.hasAttribute('disabled'))) {
                        if (!e.target.parentNode.getElementsByClassName('play_image')[0].classList.contains('disabled')) {
                            if (e.target.parentNode.getElementsByClassName('category_name')[0].innerHTML == word) {   
                                let audioSuccess = new Audio('assets/audio/success.mp3');
                                audioSuccess.play();
                                createMarker(true);
                                e.target.parentNode.getElementsByClassName('play_image')[0].classList.add('disabled');
                                setTimeout(() => {word = VoicingWords(wordsForGame)}, 1200); 
                                endGameCounter -= 1;

                                writingToLocalStorage(word, 'correct');
                            } else {
                                let audioFail = new Audio('assets/audio/fail.mp3');
                                audioFail.play();
                                fail = createMarker(false);

                                writingToLocalStorage(word, 'incorrect');
                            }
                        }
                    } 

                    if (endGameCounter == 0) {
                        if (fail == true) {
                            document.getElementsByTagName('main')[0].innerHTML = '<img src="assets/img/fail_game.png" id="end_game" alt="fail">';
                            let audioFailGame = new Audio('assets/audio/fail_game.mp3');
                            audioFailGame.play();
                            setTimeout(() => {window.location.reload(true);}, 2500); 
                        } else {
                            document.getElementsByTagName('main')[0].innerHTML = '<img src="assets/img/success_game.png" id="end_game" alt="fail">';
                            let audioWinGame = new Audio('assets/audio/win_game.mp3');
                            audioWinGame.play();
                            setTimeout(() => {window.location.reload(true);}, 2500); 
                        }
                    }
                }
            }); 
            
            repeat.onclick = () => {
                VoicingWords(word);
            }
        }
    })
})


function VoicingWords (arrOrWord) {
    let reactivate = window.speechSynthesis.getVoices();
    let enVoice = reactivate.filter(function (elem) { return elem.lang == "en-US" })[0];
    let word;

    if (Array.isArray(arrOrWord)) {
        let randomNumber = Math.trunc(Math.random() * arrOrWord.length);
        word = arrOrWord[randomNumber];
    
        arrOrWord.splice(randomNumber, 1);
    } else {
        word = arrOrWord;
    }

    let utterance = new SpeechSynthesisUtterance(word);
    utterance.voice = enVoice;

    window.speechSynthesis.speak(utterance);

    return word;
}

function createMarker(resultGame) {

    let markerTemplate = document.createElement('IMG');
    let marker = markerTemplate.cloneNode(true);
    let fail;

    if (resultGame == true) {
        marker.setAttribute('src', 'assets/icons/success_marker.png');
        stats_markers.appendChild(marker);
    } else {
        marker.setAttribute('src', 'assets/icons/fail_marker.png');
        stats_markers.appendChild(marker);
        fail = true;
    }

    if (stats_markers.children.length > 22) {
        stats_markers.firstElementChild.remove();
    }

    return fail;
}

var statsStorage = window.localStorage;


var initStatsStorage = function() {
    for (let category in wordsForStats) {
        for (word of wordsForStats[category]) {
            let key_storage_correct = `${word.name}.correct`;
            let key_storage_incorrect = `${word.name}.incorrect`;
            let key_storage_trained = `${word.name}.trained`;

            if (statsStorage.getItem(key_storage_correct) == null) {
                statsStorage.setItem(key_storage_correct, 0);
            }

            if (statsStorage.getItem(key_storage_incorrect) == null) {
                statsStorage.setItem(key_storage_incorrect, 0);
            }
            
            if (statsStorage.getItem(key_storage_trained) == null) {
                statsStorage.setItem(key_storage_trained, 0);
            }
        }
    }
}

initStatsStorage();

var writingToLocalStorage = function(word_name, column_name) {
    let key_storage = `${word_name}.${column_name}`;
    let value = statsStorage.getItem(key_storage);
    statsStorage.setItem(key_storage, Number(value) + 1);
}


 

