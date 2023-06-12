
// данные для карточек с категориями

function InitCategoryCard () {
    let Fruits = {
        id: "fruits",
        img: 'assets/img/fruits.png',
        name: 'Fruits',
    }

    let Animals = {
        id: "animals",
        img: 'assets/img/animals.png',
        name: 'Animals',
    }

    let House = {
        id: "house",
        img: 'assets/img/house.png',
        name: 'House',
    }

    let Weather = {
        id: "weather",
        img: 'assets/img/weather.png',
        name: 'Weather',
    }

    let Food = {
        id: "food",
        img: 'assets/img/food.png',
        name: 'Food',
    }

    let Vegetables = {
        id: "vegetables",
        img: 'assets/img/vegetables.png',
        name: 'Vegetables',
    }

    let Nature = {
        id: "nature",
        img: 'assets/img/nature.png',
        name: 'Nature',
    }

    let School = {
        id: "school",
        img: 'assets/img/school.png',
        name: 'School',
    }

    return [Fruits, Animals, House, Weather, Food, Vegetables, Nature, School]
}

// создание карточки

function generateCategoryCardNode(id, img, name){
    let cardTemplate = document.getElementById('category_card_template');
    let newCard = cardTemplate.cloneNode(true);

    newCard.getElementsByTagName('img')[0].src = img;
    newCard.id = '';

    newCard.getElementsByClassName('category_name')[0].innerHTML = name;
    newCard.id = id;

    return newCard;
}

// расстановка карточек категорий

let categoryCards = InitCategoryCard();
let cardsContainer = document.getElementsByClassName('cards_container')[0];

let cardsNumber = 8; 

cardsContainer.innerHTML = '';

for (let i = 0; i < cardsNumber; i++){
    let randomNumber = Math.trunc(Math.random()*categoryCards.length);
    let currentCards = categoryCards[randomNumber];

    categoryCards.splice(randomNumber, 1);

    let currentCardsNode = generateCategoryCardNode(currentCards.id, currentCards.img, currentCards.name);
    cardsContainer.appendChild(currentCardsNode);
}
