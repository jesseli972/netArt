// --- Variables ---
let clickCount = 0;
let keyCount = 0;

const heading = document.getElementById("heading");
const counterText = document.getElementById("counter-text");
const box = document.getElementById("box");

// --- Functions ---

// generate a random hex color
function randomColor() {
    const letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// update the counter display
function updateCounter() {
    counterText.textContent = "clicks: " + clickCount + "  |  keypresses: " + keyCount;
}

// --- Event Listeners ---

// clicking the heading changes the box color
heading.addEventListener("click", function () {
    clickCount++;
    const newColor = randomColor();
    box.style.backgroundColor = newColor;
    heading.style.color = newColor;
    heading.textContent = newColor;
    updateCounter();
});

// pressing any key morphs the box shape and changes the background
document.addEventListener("keydown", function (event) {
    keyCount++;
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    // toggle between circle and square
    if (keyCount % 2 === 0) {
        box.style.borderRadius = "12px";
        box.style.transform = "rotate(0deg)";
    } else {
        box.style.borderRadius = "50%";
        box.style.transform = "rotate(45deg)";
    }
    updateCounter();
});