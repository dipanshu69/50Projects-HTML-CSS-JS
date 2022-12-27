const button = document.getElementById("button");
const container = document.getElementsByClassName("container");
const input = document.getElementsByTagName("input");

console.log(input);

button.addEventListener("click", () => {
    container[0].classList.toggle("active");
    input[0].focus();
})
