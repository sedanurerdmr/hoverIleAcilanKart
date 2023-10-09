const panels = document.querySelectorAll(".panel");  //tum panellere erismek istedigimiz icin all kullaniriz

panels.forEach(panel => {
    panel.addEventListener("mouseenter", () => {  // Mouse üzerine gelindiğinde
        addActive(panel);
    });

    panel.addEventListener("mouseleave", () => {  // Mouse üzerinden çıkıldığında
        removeActive();
    });
});
function addActive(panel) {
    removeActive();  // Diğer panellerden "active" sınıfını kaldır
    panel.classList.add("active");
}

function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}
