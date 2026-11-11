document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".header__mobilemenu");
    const btnOpen = document.querySelector(".btn-burger");
    const btnClose = document.querySelector(".btn-close");

    if (btnOpen && menu) {
        btnOpen.addEventListener("click", function (e) {
            e.stopPropagation();
            menu.classList.add("show");
        });
    }

    if (btnClose && menu) {
        btnClose.addEventListener("click", function (e) {
            e.stopPropagation();
            menu.classList.remove("show");
        });
    }

    document.addEventListener("click", function (e) {
        if (menu && menu.classList.contains("show")) {
            if (!menu.contains(e.target) && !btnOpen.contains(e.target)) {
                menu.classList.remove("show");
            }
        }
    });
});