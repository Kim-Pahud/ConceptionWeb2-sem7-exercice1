const boutons = document.querySelectorAll('.spé');
const modal = document.querySelector('.modal');

for (let i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener('click', modalOpen);
    
}

function modalOpen(){
    const element = document.createElement('img');
    element.src = '../images/crosscountry.jpg';
    element.addEventListener('click', modalClose);
    modal.appendChild(element);
    modal.classList.add('visible');

}

function modalClose(e){
    modal.removeChild(e.currentTarget);
    modal.classList.remove('visible');
}