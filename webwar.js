document.querySelector('.nav-links').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        console.log(e.target.innerText + ' clicked');
    }
});
