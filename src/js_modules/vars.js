
var cardsContainer = document.getElementsByClassName('cards_container')[0];

var statsStorage = window.localStorage;

var switcher = document.getElementsByClassName('switch_slider')[0];

var enVoice; 
    
window.speechSynthesis.onvoiceschanged = function () {
        let reactivate = window.speechSynthesis.getVoices();
        enVoice = reactivate.filter(function (elem) { return elem.lang == "en-US" })[0];
}

export {cardsContainer, statsStorage, switcher, enVoice }