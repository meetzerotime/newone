function add_new() {

    let formContainer = document.getElementById('formContainer');
    let newForm = formContainer.children[0].cloneNode(true);

    formContainer.appendChild(newForm);



    let minusButton = document.createElement('button');
    minusButton.type = 'button';
    minusButton.textContent = '-';
    minusButton.onclick = function () {
        remove_form(newForm);
    };

    newForm.appendChild(minusButton);
}

function remove_form(form) {
    let formContainer = document.getElementById('formContainer');
    if (formContainer.children.length > 1) {
        formContainer.removeChild(form);
    }
}



for (let i = 1; i < 10; i++) {
    console.log(i)
}
