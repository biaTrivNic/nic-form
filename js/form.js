const formBtn = document.querySelector(".form__btn");
const closeBtn = document.querySelector(".dialog__btn");
const dialog = document.querySelector(".dialog");

formBtn.addEventListener("click", function (e) {
    dialog.showModal();
});

closeBtn.addEventListener("click", function () {
    dialog.close();
    window.location.reload();
});