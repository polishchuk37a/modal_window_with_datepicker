let modal = document.getElementById("myModal");
let btn = document.querySelector(".modal_window_btn");
let span = document.querySelector(".close");
let select1 = document.querySelector(".select");
let input1 = document.querySelector('.dp-input');

// When the user clicks on the button, open the modal
btn.addEventListener ('click',()=>{
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', ()=>{
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const picker = datepicker('.dp-input', {
    onSelect: (instance, date) => {
       select1.style.display = "block";
    }
})