const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("registerModal");

openModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
});

// Tashqarisini bosganda yopiladi
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
});


const textBox = document.getElementById("textBox");
const fade = document.getElementById("fade");
const btn = document.getElementById("toggleBtn");

let open = false;

btn.onclick = () => {
    open = !open;

    if (open) {
        textBox.classList.remove("max-h-52");
        textBox.classList.add("max-h-[1000px]");

        fade.classList.add("hidden");

        btn.textContent = "Скрыть";
    } else {
        textBox.classList.remove("max-h-[1000px]");
        textBox.classList.add("max-h-52");

        fade.classList.remove("hidden");

        btn.textContent = "Показать полностью";
    }
};


