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