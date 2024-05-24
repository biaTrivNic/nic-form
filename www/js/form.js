const formBtn = document.querySelector(".form__btn");
const closeBtn = document.querySelector(".dialog__btn");
const dialog = document.querySelector(".dialog");

const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#nome");
const messageInput = document.querySelector("#mensagem");

function emailValid() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailInput.value);
}

function nameValid() {
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    return nameRegex.test(nameInput.value);
}

formBtn.addEventListener("click", function (e) {
    e.preventDefault()

    if (!emailValid() && (emailInput.value != "")) {
        document.querySelector("#error__email").innerHTML = "Email inválido."
    } else {
        document.querySelector("#error__email").innerHTML = ""
    }

    if (!nameValid() && (nameInput.value != "")) {
        document.querySelector("#error__name").innerHTML = "Utilize seu nome completo."
    } else {
        document.querySelector("#error__name").innerHTML = ""
    }
    
    if ((emailInput.value == "") || (nameInput.value == "") || (messageInput.value == "")){
        document.querySelector("#error__fields").innerHTML = "Preencha todos os campos."
    } else {
        document.querySelector("#error__fields").innerHTML = ""
    }

    if ((emailInput.value != "") && (nameInput.value != "") && (messageInput.value != "") && (emailValid()) && (nameValid())) {
        dialog.showModal();
    }

});

closeBtn.addEventListener("click", function () {
    dialog.close();
    window.location.reload();
});



