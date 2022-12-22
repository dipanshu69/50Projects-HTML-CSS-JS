const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach(element => {
    element.addEventListener("click", () => {
        removeActiveClasses();
        element.classList.add('active');
    })
});

const removeActiveClasses = () => {
    panels.forEach(element => {
        element.classList.remove('active');
    })
}