const burgerWrapper = document.querySelector('.burger-wrapper');
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.burger-navigation');

burger.addEventListener('click', () => {
    !document.querySelector('.active') 
        ? burgerWrapper.classList.add('active')
        : burgerWrapper.classList.remove('active');
});

navigation.addEventListener('click', (e) => {
    e.target.tagName === 'A' ? burgerWrapper.classList.remove('active') : null;
})
