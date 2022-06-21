const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementsByClassName('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
})

close[0].addEventListener('click', () => {
    modal_container.classList.remove('show');
})

/* $("#open").on("click", function(){
        alert("The paragraph was clicked.");
        });*/