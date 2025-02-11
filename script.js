let menuIcon = document.getElementById("menu-icon");
let xMark = document.getElementById("x-mark");
let ulLinks = document.querySelector(".links");

// console.log(ulLinks)

menuIcon.addEventListener("click", () => {
    ulLinks.classList.add("active");
})
xMark.addEventListener("click", () => {
    ulLinks.classList.remove("active");
})