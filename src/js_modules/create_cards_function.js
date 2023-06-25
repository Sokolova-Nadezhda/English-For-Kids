
import { writingToLocalStorage } from './writing_to_local_storage.js';
import { cardsContainer, enVoice} from './vars.js';

// создание карточки

const generateWordsCardNode = function(id, img, name, translate){
    const cardTemplate = document.getElementById('category_card_template');
    let newCard = cardTemplate.cloneNode(true);

    newCard.setAttribute('class', 'category_card flipper');

    newCard.innerHTML = `
        <div class='front'>
            <img src="" class="image">
            <div class="cards_bg"></div>
            <span class="category_name"></span>
            <img src="assets/icons/rotate.png" class="flip_button">
        </div>
        <div class='back'>
            <img src="" class="image">
            <div class="cards_bg"></div>
            <span class="category_translate"></span>
        </div>
        `

    newCard.querySelectorAll('.image').forEach((imgElem) => {
        imgElem.src = img;
    });

    newCard.id = '';

    newCard.getElementsByClassName('category_name')[0].innerHTML = name;
    newCard.getElementsByClassName('category_translate')[0].innerHTML = translate;

    newCard.id = id;

    return newCard;
}

export function createCards(arr) {
    let cardsNumber = 8;
    
    if (arr) {
        if (arr.length < 8) {
            cardsNumber = arr.length;
            cardsContainer.style.justifyContent = 'center';
            cardsContainer.style.gap = '30px';
        } 
    
        for (let i = 0; i < cardsNumber; i++) {
            let randomNumber = Math.trunc(Math.random() * arr.length);
            let currentCards = arr[randomNumber];
    
            arr.splice(randomNumber, 1);
    
            let currentCardsNode = generateWordsCardNode(currentCards.id, currentCards.img, currentCards.name, currentCards.translate);
            let flipContainer = document.createElement('DIV');
            flipContainer.setAttribute('class', 'flip_container');
    
            cardsContainer.appendChild(flipContainer);
            flipContainer.appendChild(currentCardsNode);
        }
    
        const rotateButtons = document.querySelectorAll('.flip_button');
        rotateButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
    
                let rotate = e.currentTarget;
                rotate.closest('.flipper').style.transform = 'rotateY(180deg)';
            })
        });
    
        const frontSides = document.querySelectorAll('.front');

        frontSides.forEach((card) => {

            const VoicingWords = function (e) {
                let text = e.target.closest('.front').getElementsByClassName('category_name')[0].innerHTML;
                let utterance = new SpeechSynthesisUtterance(text);

                utterance.voice = enVoice;

                if (document.getElementsByClassName('train')[0]) {
                    window.speechSynthesis.speak(utterance);
                    writingToLocalStorage(text, 'trained');
                }
            }

            card.addEventListener('click', VoicingWords)

            if (document.getElementsByClassName('play')[0]) {
                card.getElementsByClassName('category_name')[0].classList.add('play_card');
                card.getElementsByClassName('flip_button')[0].classList.add('play_card');
                card.getElementsByClassName('image')[0].classList.add('play_image');
                start.removeAttribute('disabled');
            }

        })

        const backSides = document.querySelectorAll('.back');
        backSides.forEach((card) => {
            card.addEventListener('mouseleave', (e) => {
                e.target.closest('.flipper').style.transform = '';
            })
    
        })

        if (document.getElementsByClassName('buttons_container')[0]) {
            start.removeAttribute('disabled');
        }
    
        if (document.getElementsByClassName('stats_buttons')[0]) {
            document.getElementsByClassName('stats_buttons')[0].remove();
            document.getElementsByClassName('btn_stats')[0].removeAttribute('disabled');
        }
    }
    
}
