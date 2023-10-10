let data = "";
let inputField = document.querySelector('.input_field');
let gridItems = document.querySelectorAll('.grid_items');
let nums = document.querySelectorAll('.num');


gridItems.forEach(key => {
    key.addEventListener('click', k => {
        // console.log(k.target.innerHTML)
        if (k.target.innerHTML == 'AC') {
            data = '';
        } else if (k.target.innerHTML == '=') {
            let result = eval(data);
            data = result;
        } else if (k.target.innerHTML == '÷') {
            data = data + '/';
        } else if (k.target.innerHTML == '⨉') {
            data = data + '*';
        } else if(k.target.innerHTML == '<i class="ri-delete-back-2-line"></i>'){
            data = data.slice(0,-1);
        } else {
            // console.log(k.target.innerHTML)
            data = data + k.target.innerHTML
        }
        // store.push(k.target.innerHTML);
        // inputField.value = store.join()
        inputField.value = data;
    })
})
