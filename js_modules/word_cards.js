
function generateCardObject(id, img, name, translate) {
    return {
        id: id,
        img: img,
        name: name,
        translate: translate,
    }
}

function InitFruitsCard() {

    let Orange = generateCardObject('orange', 'assets/img/fruits/orange.png', 'Orange', 'Aпельсин')

    let Banana = generateCardObject('banana', 'assets/img/fruits/banana.png', 'Banana', 'Банан')

    let Lemon = generateCardObject('lemon', 'assets/img/fruits/lemon.png', 'Lemon', 'Лимон')

    let Apple = generateCardObject('apple', 'assets/img/fruits/apple.png', 'Apple', 'Яблоко')

    let Pear = generateCardObject('pear', 'assets/img/fruits/pear.png', 'Pear', 'Груша')

    let Peach = generateCardObject('peach', 'assets/img/fruits/peach.png', 'Peach', 'Персик')

    let Pineapple = generateCardObject('pineapple', 'assets/img/fruits/pineapple.png', 'Pineapple', 'Ананас')

    let Grapes = generateCardObject('grapes', 'assets/img/fruits/grapes.png', 'Grapes', 'Виноград')

    return [Orange, Banana, Lemon, Apple, Pear, Peach, Pineapple, Grapes]
}

function InitAnimalCard() {

    let Cow = generateCardObject('cow', 'assets/img/animals/cow.png', 'Cow', 'Корова')

    let Crocodile = generateCardObject('crocodile', 'assets/img/animals/crocodile.png', 'Crocodile', 'Крокодил')

    let Giraffe = generateCardObject('giraffe', 'assets/img/animals/giraffe.png', 'Giraffe', 'Жираф')

    let Goat = generateCardObject('goat', 'assets/img/animals/goat.png', 'Goat', 'Коза')

    let Bear = generateCardObject('Bear', 'assets/img/animals/bear.png', 'Bear', 'Медведь')

    let Pig = generateCardObject('pig', 'assets/img/animals/pig.png', 'Pig', 'Свинья')

    let Horse = generateCardObject('horse', 'assets/img/animals/horse.png', 'Horse', 'Лошадь')

    let Fox = generateCardObject('fox', 'assets/img/animals/fox.png', 'Fox', 'Лиса')

    return [Cow, Crocodile, Giraffe, Goat, Bear, Pig, Horse, Fox]
}

function InitHouseCard() {

    let Bedroom = generateCardObject('bedroom', 'assets/img/house/bedroom.png', 'Bedroom', 'Спальня')

    let Kitchen = generateCardObject('kitchen', 'assets/img/house/kitchen.png', 'Kitchen', 'Кухня')

    let Bed = generateCardObject('bed', 'assets/img/house/bed.png', 'Bed', 'Кровать')

    let Chair = generateCardObject('chair', 'assets/img/house/chair.png', 'Chair', 'Стул')

    let Sofa = generateCardObject('sofa', 'assets/img/house/sofa.png', 'Sofa', 'Диван')

    let Fridge = generateCardObject('fridge', 'assets/img/house/fridge.png', 'Fridge', 'Холодильник')

    let Window = generateCardObject('window', 'assets/img/house/window.png', 'Window', 'Окно')

    let Mirror = generateCardObject('mirror', 'assets/img/house/mirror.png', 'Mirror', 'Зеркало')

    return [Bedroom, Kitchen, Bed, Chair, Sofa, Fridge, Window, Mirror]
}

function InitWeatherCard() {

    let Rain = generateCardObject('rain', 'assets/img/weather/rain.png', 'Rain', 'Дождь')

    let Snow = generateCardObject('snow', 'assets/img/weather/snow.png', 'Snow', 'Снег')

    let Cloud = generateCardObject('cloud', 'assets/img/weather/cloud.png', 'Cloud', 'Облако')

    let Wind = generateCardObject('wind', 'assets/img/weather/wind.png', 'Wind', 'Ветер')

    let Fog = generateCardObject('fog', 'assets/img/weather/fog.png', 'Fog', 'Туман')

    let Cold = generateCardObject('cold', 'assets/img/weather/cold.png', 'Cold', 'Холодно')

    let Hot = generateCardObject('hot', 'assets/img/weather/hot.png', 'Hot', 'Жарко')

    let Sun = generateCardObject('sun', 'assets/img/weather/sun.png', 'Sun', 'Солнце')

    return [Rain, Snow, Cloud, Wind, Fog, Cold, Hot, Sun]
}

function InitFoodCard() {

    let Bread = generateCardObject('bread', 'assets/img/food/bread.png', 'Bread', 'Хлеб')

    let Cheese = generateCardObject('cheese', 'assets/img/food/cheese.png', 'Cheese', 'Сыр')

    let Eggs = generateCardObject('eggs', 'assets/img/food/eggs.png', 'Eggs', 'Яйца')

    let Meat = generateCardObject('meat', 'assets/img/food/meat.png', 'Meat', 'Мясо')

    let Butter = generateCardObject('butter', 'assets/img/food/butter.png', 'Butter', 'Масло')

    let Sugar = generateCardObject('sugar', 'assets/img/food/sugar.png', 'Sugar', 'Сахар')

    let Salt = generateCardObject('salt', 'assets/img/food/salt.png', 'Salt', 'Соль')

    let Yogurt = generateCardObject('yogurt', 'assets/img/food/yogurt.png', 'Yogurt', 'Йогурт')

    return [Bread, Cheese, Eggs, Meat, Butter, Sugar, Salt, Yogurt]
}

function InitVegetablesCard() {

    let Potato = generateCardObject('potato', 'assets/img/vegetables/potato.png', 'Potato', 'Картофель')

    let Carrot = generateCardObject('carrot', 'assets/img/vegetables/carrot.png', 'Carrot', 'Морковь')

    let Onion = generateCardObject('onion', 'assets/img/vegetables/onion.png', 'Onion', 'Лук')

    let Garlic = generateCardObject('garlic', 'assets/img/vegetables/garlic.png', 'Garlic', 'Чеснок')

    let Cucumber = generateCardObject('cucumber', 'assets/img/vegetables/cucumber.png', 'Cucumber', 'Огурец')

    let Tomato = generateCardObject('tomato', 'assets/img/vegetables/tomato.png', 'Tomato', 'Помидор')

    let Cabbage = generateCardObject('cabbage', 'assets/img/vegetables/cabbage.png', 'Cabbage', 'Капуста')

    let Pepper = generateCardObject('pepper', 'assets/img/vegetables/pepper.png', 'Pepper', 'Перец')

    return [Potato, Carrot, Onion, Garlic, Cucumber, Tomato, Cabbage, Pepper]
}

function InitNatureCard() {

    let Field = generateCardObject('field', 'assets/img/nature/field.png', 'Field', 'Поле')

    let Rainbow = generateCardObject('rainbow', 'assets/img/nature/rainbow.png', 'Rainbow', 'Радуга')

    let Forest = generateCardObject('forest', 'assets/img/nature/forest.png', 'Forest', 'Лес')

    let Sea = generateCardObject('sea', 'assets/img/nature/sea.png', 'Sea', 'Море')

    let Grass = generateCardObject('grass', 'assets/img/nature/grass.png', 'Grass', 'Трава')

    let Mountain = generateCardObject('mountain', 'assets/img/nature/mountain.png', 'Mountain', 'Гора')

    let Sand = generateCardObject('sand', 'assets/img/nature/sand.png', 'Sand', 'Песок')

    let Volcano = generateCardObject('volcano', 'assets/img/nature/volcano.png', 'Volcano', 'Вулкан')

    return [Field, Rainbow, Forest, Sea, Grass, Mountain, Sand, Volcano]
}

function InitSchoolCard() {

    let Schoolbag = generateCardObject('schoolbag', 'assets/img/school/schoolbag.png', 'Schoolbag', 'Портфель')

    let Book = generateCardObject('book', 'assets/img/school/book.png', 'Book', 'Книга')

    let Copybook = generateCardObject('copybook', 'assets/img/school/copybook.png', 'Copy-book', 'Тетрадь')

    let Pencil = generateCardObject('pencil', 'assets/img/school/pencil.png', 'Pencil', 'Карандаш')

    let Ruler = generateCardObject('ruler', 'assets/img/school/ruler.png', 'Ruler', 'Линейка')

    let Pen = generateCardObject('pen', 'assets/img/school/pen.png', 'Pen', 'Ручка')

    let Teacher = generateCardObject('teacher', 'assets/img/school/teacher.png', 'Teacher', 'Учитель')

    let Lesson = generateCardObject('lesson', 'assets/img/school/lesson.png', 'Lesson', 'Урок')

    return [Schoolbag, Book, Copybook, Pencil, Ruler, Pen, Teacher, Lesson]
}



// создание карточки

function generateWordsCardNode(id, img, name, translate){
    let cardTemplate = document.getElementById('category_card_template');
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

// расстановка карточек

let cardsCategories = document.querySelectorAll('.front');

let navCategories = document.querySelectorAll('.category_nav');

let allCategories = [...cardsCategories, ...navCategories];

allCategories.forEach((card) => {
    card.addEventListener('click', (e) => {
        let idCategoryCard;

        if (e.target.closest('.category_card')) {
            idCategoryCard = e.target.closest('.category_card').id;
        }

        if (e.target.closest('.category_nav')) {
            idCategoryCard = e.target.parentNode.getElementsByTagName('img')[0].alt;
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
        
        let cardsContainer = document.getElementsByClassName('cards_container')[0];
        
        let cardsNumber = 8; 
        
        cardsContainer.innerHTML = '';
        
        for (let i = 0; i < cardsNumber; i++){
            let randomNumber = Math.trunc(Math.random()*wordCards.length);
            let currentCards = wordCards[randomNumber];
        
            wordCards.splice(randomNumber, 1);
        
            let currentCardsNode = generateWordsCardNode(currentCards.id, currentCards.img, currentCards.name, currentCards.translate);
            let flipContainer = document.createElement('DIV');
            flipContainer.setAttribute('class', 'flip_container');
            
            cardsContainer.appendChild(flipContainer);
            flipContainer.appendChild(currentCardsNode);
        }
    
        let rotateButtons = document.querySelectorAll('.flip_button');
        rotateButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                
                let rotate = e.currentTarget;
                rotate.closest('.flipper').style.transform = 'rotateY(180deg)';
            })
        });

        let frontSides = document.querySelectorAll('.front');
        
        window.speechSynthesis.onvoiceschanged = function () {

            let reactivate = window.speechSynthesis.getVoices();
            let enVoice = reactivate.filter(function (elem) { return elem.lang == "en-US" })[0];

            frontSides.forEach((card) => {

                let VoicingWords = function(e) {
                    let text = e.target.parentNode.getElementsByClassName('category_name')[0].innerHTML;
                    let utterance = new SpeechSynthesisUtterance(text);
    
                    utterance.voice = enVoice;

                    if (document.getElementsByClassName('train')[0]) {
                        window.speechSynthesis.speak(utterance);
                    }
                }

                    card.addEventListener('click', VoicingWords)

                if (document.getElementsByClassName('play')[0]) {
                    card.getElementsByClassName('category_name')[0].classList.add('play_card');
                    card.getElementsByClassName('flip_button')[0].classList.add('play_card');
                    card.getElementsByClassName('image')[0].classList.add('play_image');
                }

            })
        }

        let backSides = document.querySelectorAll('.back');
        backSides.forEach((card) => {
            card.addEventListener('mouseleave', (e) => {
                e.target.closest('.flipper').style.transform = '';
            })

        })

        if (document.getElementsByClassName('buttons_container')[0]) {
            start.removeAttribute('disabled');
        }

    })
})






