
document.querySelector('.first-button').addEventListener('click', () => {
    document.querySelector('.animated-icon').classList.toggle('open');
});

const popupBg = document.querySelector('.popup_menu_wrapper'); // Фон попап окна
const popup = document.querySelector('.popup_menu'); // Само окно
const openPopupButton = document.getElementsByTagName('nav')[0]; // Кнопка для показа окна
const closePopupButton = document.getElementsByClassName('esc_button')[0]; // Кнопка для скрытия окна

openPopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active_popup');
    popup.classList.add('active_popup');
    popup.classList.add('show_animation');
    popup.classList.remove('hide_animation');

    popup.insertBefore(openPopupButton, document.getElementsByClassName('category_nav')[0]);

    closePopupButton.classList.add('show_animation');
    closePopupButton.classList.remove('hide_animation');
    closePopupButton.style.display = 'block';
})


closePopupButton.addEventListener('click', () => {
    setTimeout(removeActive, 500);
    popup.classList.add('hide_animation');
    closePopupButton.classList.add('hide_animation');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        setTimeout(removeActive, 0);
        popup.classList.add('hide_animation');
        closePopupButton.classList.add('hide_animation');
    }
});

const selectedNav = document.querySelector('.category_nav.active');

popup.onclick = function(e) {
    let nav_elem = e.target.closest('.category_nav'); 

    if (!nav_elem) return; 

    if (!popup.contains(nav_elem)) return; 

    setTimeout(removeActive, 0);
    popup.classList.add('hide_animation');
    closePopupButton.classList.add('hide_animation');

    if (selectedNav) { 
        selectedNav.classList.remove('active');
    }
    selectedNav = nav_elem;
    selectedNav.classList.add('active'); 
}


function removeActive() {  // Функция для снятия активных классов с элементов
    popupBg.classList.remove('active_popup');
    popup.classList.remove('active_popup');
    popup.classList.remove('show_animation');
    closePopupButton.style.display = 'none';

    esc_button_container.insertBefore(openPopupButton, undefined);

    closePopupButton.classList.remove('show_animation');
    const icon_open = document.getElementsByClassName('animated-icon open')[0];
    if (icon_open) {
        icon_open.classList.remove('open');
    }
}
