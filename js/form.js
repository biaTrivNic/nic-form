const formBtn = document.querySelector(".form__btn");
const closeBtn = document.querySelector(".dialog__btn");
const dialog = document.querySelector(".dialog");

const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#nome");
const messageInput = document.querySelector("#mensagem");

formBtn.addEventListener("click", function (e) {
    e.preventDefault()

    if ((emailInput.value != "") && (nameInput.value != "") && (messageInput.value != "")) {
        dialog.showModal();
    }
    else {
        document.querySelector(".error").innerHTML = "Preencha todos os campos"
    }
});

closeBtn.addEventListener("click", function () {
    dialog.close();
    window.location.reload();
});



