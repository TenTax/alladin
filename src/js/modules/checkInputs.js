const checkInputs = (form) => {
    const name = form.querySelector('[name="name"]'),
        phone = form.querySelector('[name="phone"]'),
        checkbox = form.querySelector('[type="checkbox"]');

    const nameValue = name.value.trim(),
        phoneValue = phone.value.trim();

    let check = true;


    if (nameValue == '') {
        setErrorFor(name, 'Это поле не может быть пустым');
    } else {
        setSuccessFor(name);
    }

    if (phoneValue == '') {
        setErrorFor(phone, 'Это поле не может быть пустым');
    } else {
        setSuccessFor(phone);
    }

    if (!checkbox.checked) {
        setErrorFor(checkbox, 'Установите флажок');
    } else {
        checkbox.parentNode.className = 'form__group';
    }

    function setErrorFor(input, message) {
        check = false;
        input.parentNode.querySelector('.form__error').textContent = message;
        input.parentNode.className = 'form__group form__group--error';
    }

    function setSuccessFor(input) {
        input.parentNode.className = 'form__group form__group--success';
    }

    return check;
};

export default checkInputs;