
const cardsContainer = document.getElementsByClassName('cards_container')[0];

const statsStorage = window.localStorage;

const switcher = document.getElementsByClassName('switch_slider')[0];

let enVoice; 
    
window.speechSynthesis.onvoiceschanged = function () {
        const reactivate = window.speechSynthesis.getVoices();
        enVoice = reactivate.filter(function (elem) { return elem.lang == "en-US" })[0];
}

export {cardsContainer, statsStorage, switcher, enVoice }
