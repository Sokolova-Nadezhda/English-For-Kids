let popupBg = document.querySelector('.popup_menu_wrapper'); // Фон попап окна
let popup = document.querySelector('.popup_menu'); // Само окно
let openPopupButton = document.getElementsByTagName('nav')[0]; // Кнопка для показа окна
let closePopupButton = document.getElementsByClassName('esc_button')[0]; // Кнопка для скрытия окна

openPopupButton.addEventListener('click', (e) => { 
        e.preventDefault();
        popupBg.classList.add('active_popup'); 
        popup.classList.add('active_popup'); 
        popup.classList.add('show_animation');
        popup.classList.remove('hide_animation');

        closePopupButton.classList.add('show_animation');
        closePopupButton.classList.remove('hide_animation');
        closePopupButton.style.display = 'block';
    })


closePopupButton.addEventListener('click',() => { 
    setTimeout(removeActive, 500);
    popup.classList.add('hide_animation');
    closePopupButton.classList.add('hide_animation');
});

document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        setTimeout(removeActive, 0);
        popup.classList.add('hide_animation');
        closePopupButton.classList.add('hide_animation');
    }
});

let navButtons = document.querySelectorAll('.category_nav'); // элементы навигации в попап меню

navButtons.forEach((button) => { 
    button.addEventListener('click',() => {  
            setTimeout(removeActive, 0);
            popup.classList.add('hide_animation');
            closePopupButton.classList.add('hide_animation');
        });
});


function removeActive() {  // Функция для снятия активных классов с элементов
    popupBg.classList.remove('active_popup'); 
    popup.classList.remove('active_popup'); 
    popup.classList.remove('show_animation');
    closePopupButton.style.display = 'none';

    closePopupButton.classList.remove('show_animation');
    document.getElementsByClassName('animated-icon open')[0].classList.remove('open');
}