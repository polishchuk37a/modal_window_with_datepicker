let modal = document.getElementById("myModal");
let btn = document.querySelector(".modal_window_btn");
let span = document.querySelector(".close");
let select1 = document.querySelector(".select");
let input1 = document.querySelector('.dp-input');
let selectedDate = document.querySelector('.selected_date');
let selectedValue = document.querySelector('.selected_value');
let dataBlock = document.querySelector('.selected_data_block');
let message = document.querySelector('.message');

btn.addEventListener ('click',()=>{
    modal.style.display = "block";
})

span.addEventListener('click', ()=>{
   validDate();
   push();
})

window.onclick = function(event) {
    if (event.target == modal) {
        validDate();
        push();
    }
}

const picker = datepicker('.dp-input', {
    onSelect: (instance, date) => {
       select1.style.display = "block";
    }
})

select1.addEventListener('change', () => {
    if(select1.value == 'first' || select1.value == 'second' || select1.value == 'fifth'){
        push();
        modal.style.display = "none";
        dataBlock.style.display = "block";
    }
});

function push() {
    let valueDate = input1.value;
    selectedDate.value = valueDate;
    let valueSelect = select1.value;
    selectedValue.value = valueSelect;
}

function validDate(){
    if(input1.value != ""){
        modal.style.display = "none";
        message.style.display = "none";
        dataBlock.style.display = "block";
    } else{
        message.style.display = "block";
    }
}







