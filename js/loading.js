const loaderContainer = document.querySelector('.loader-container');
window.addEventListener('load', () => {
    window.setTimeout(function(){
        loaderContainer.style.display = 'none';
    }, 1500)
});