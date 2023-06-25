
import { cardsContainer } from "./vars.js";
import{ 
    InitFruitsCard, 
    InitAnimalCard, 
    InitHouseCard, 
    InitWeatherCard, 
    InitFoodCard, 
    InitVegetablesCard, 
    InitNatureCard, 
    InitSchoolCard } from './init_word_cards.js';
import { createCards } from './create_cards_function.js';


// расстановка карточек


const cardsCategories = document.querySelectorAll('.front');

const navCategories = [...document.querySelectorAll('.category_nav')];
navCategories.shift();

const allCategories = [...cardsCategories, ...navCategories];

const functionCreateCards = createCards;

allCategories.forEach((card) => {
    card.addEventListener('click', (e) => {
        let idCategoryCard;

        if (e.target.closest('.category_card')) {
            idCategoryCard = e.target.closest('.category_card').id;
        }

        if (e.target.closest('.category_nav')) {
            idCategoryCard = e.target.closest('.category_nav').getElementsByTagName('img')[0].alt;
        }

        let wordCards;

        switch (idCategoryCard) {
            case 'fruits': wordCards = InitFruitsCard(); break;
            case 'animals': wordCards = InitAnimalCard(); break;
            case 'house': wordCards = InitHouseCard(); break;
            case 'weather': wordCards = InitWeatherCard(); break;
            case 'food': wordCards = InitFoodCard(); break;
            case 'vegetables': wordCards = InitVegetablesCard(); break;
            case 'nature': wordCards = InitNatureCard(); break;
            case 'school': wordCards = InitSchoolCard(); break;
        }

        cardsContainer.innerHTML = '';

        functionCreateCards(wordCards);
    })
})
