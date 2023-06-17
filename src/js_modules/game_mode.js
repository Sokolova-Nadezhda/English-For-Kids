
import { switcher as switcher, cardsContainer } from './vars.js';
import { initStatsStorage } from './writing_to_local_storage.js';
import { writingToLocalStorage } from './writing_to_local_storage.js'

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

    if ((switcher.classList.contains('play')) && (!repeat.hasAttribute('disabled')) && (!cardsContainer.firstElementChild.classList.contains('table_wrapper'))) {
        repeat.setAttribute('disabled', 'true');
        start.removeAttribute('disabled');
    }

    if (switcher.classList.contains('train')) {
        document.querySelectorAll('.disabled').forEach((elem) => { elem.classList.remove('disabled') })
        stats_markers.innerHTML = '';
    }

    start.addEventListener('click', () => {

        let cards = document.querySelectorAll('.front');
        let cardsNames = document.querySelectorAll('.category_name');
        let wordsForGame = [];
        let word = '';

        if ((!start.hasAttribute('disabled'))) {

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
                    if ((switcher.classList.contains('play')) && (start.hasAttribute('disabled'))) {
                        if (!e.target.parentNode.getElementsByClassName('play_image')[0].classList.contains('disabled')) {
                            if (e.target.parentNode.getElementsByClassName('category_name')[0].innerHTML == word) {
                                let audioSuccess = new Audio('assets/audio/success.mp3');
                                audioSuccess.play();
                                createMarker(true);
                                e.target.parentNode.getElementsByClassName('play_image')[0].classList.add('disabled');
                                setTimeout(() => { word = VoicingWords(wordsForGame) }, 1200);
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
                            setTimeout(() => { window.location.reload(true); }, 2500);
                        } else {
                            document.getElementsByTagName('main')[0].innerHTML = '<img src="assets/img/success_game.png" id="end_game" alt="fail">';
                            let audioWinGame = new Audio('assets/audio/win_game.mp3');
                            audioWinGame.play();
                            setTimeout(() => { window.location.reload(true); }, 2500);
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



var VoicingWords = function (arrOrWord) {
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

var createMarker = function (resultGame) {

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

initStatsStorage();





