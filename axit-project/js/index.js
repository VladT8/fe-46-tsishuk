const links = document.querySelectorAll(".tabs__nav-link");

const onWindowClick = (e) => {
    if (e.target.tagName === 'A'){
        e.target.parentNode.click()
    }
};

window.addEventListener('click', onWindowClick, false)
window.onload = function () {
    links[0].click();
};

const imgContainer = document.querySelector('.customer__inner')
const dotsContainer = document.querySelector('.nav__dots')


document.getElementById('dot1').addEventListener('click', ()=>{
    imgContainer.className = 'customer__inner first-active'
    dotsContainer.className = 'nav__dots first-current'
})
document.getElementById('dot2').addEventListener('click', ()=>{
    imgContainer.className = 'customer__inner second-active'
    dotsContainer.className = 'nav__dots second-current'
})
document.getElementById('dot3').addEventListener('click', ()=>{
    imgContainer.className = 'customer__inner third-active'
    dotsContainer.className = 'nav__dots third-current'
})
