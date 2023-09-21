const shareContainer = document.querySelector("[data-share-container]");

const sharePanel = document.querySelector("[data-share-panel]")

shareContainer.addEventListener("click", () => {
    sharePanel.classList.toggle("active");
})

