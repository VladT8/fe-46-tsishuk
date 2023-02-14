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

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger , .header__menu').toggleClass('active');
    });
});