// Track how many times the user has clicked
var clicks = 0;

// Grab elements from the page
var headline = document.getElementById("headline");
var subtext = document.getElementById("subtext");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var counter = document.getElementById("counter");

// Every click on the page adds chaos
document.addEventListener("click", function () {
    clicks = clicks + 1;
    counter.textContent = "Clicks: " + clicks;

    // Stage 1: subtle shift (3+ clicks)
    if (clicks >= 3 && clicks < 7) {
        document.body.style.backgroundColor = "#e8e0d4";
        headline.textContent = "Everything is mostly under control.";
        subtext.textContent = "Minor instabilities detected. Please remain calm.";
        box1.style.transform = "rotate(1deg)";
        box2.style.transform = "rotate(-1deg)";
        box3.style.transform = "rotate(2deg)";
    }

    // Stage 2: getting worse (7+ clicks)
    if (clicks >= 7 && clicks < 12) {
        document.body.style.backgroundColor = "#1a1a1a";
        document.body.style.color = "#e0e0e0";
        headline.textContent = "Things are starting to slip.";
        subtext.textContent = "We advise caution.";
        subtext.style.color = "#aaa";

        box1.style.background = "#2a2a2a";
        box1.style.borderColor = "#555";
        box1.style.transform = "rotate(3deg) skewX(2deg)";

        box2.style.background = "#2a2a2a";
        box2.style.borderColor = "#555";
        box2.style.transform = "rotate(-4deg) skewX(-3deg)";

        box3.style.background = "#2a2a2a";
        box3.style.borderColor = "#555";
        box3.style.transform = "rotate(5deg)";
    }

    // Stage 3: full chaos (12+ clicks)
    if (clicks >= 12) {
        document.body.style.backgroundColor = "#0a0a0a";
        document.body.style.color = "#00ff41";
        document.body.style.fontFamily = "monospace";

        headline.textContent = "CH40S R31GNS.";
        headline.style.fontSize = "60px";
        headline.style.letterSpacing = "10px";

        subtext.textContent = "y0u d1d th1s.";
        subtext.style.color = "#00ff41";

        box1.style.background = "transparent";
        box1.style.borderColor = "#00ff41";
        box1.style.transform = "rotate(8deg) skewX(10deg)";

        box2.style.background = "transparent";
        box2.style.borderColor = "#00ff41";
        box2.style.transform = "rotate(-10deg) skewX(-8deg)";

        box3.style.background = "transparent";
        box3.style.borderColor = "#00ff41";
        box3.style.transform = "rotate(12deg) skewX(5deg) scale(1.1)";

        counter.style.color = "#00ff41";
    }
});

// Hovering over a box makes it scale up
var boxes = document.querySelectorAll(".box");
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseenter", function () {
        this.style.transform = this.style.transform + " scale(1.05)";
    });
    boxes[i].addEventListener("mouseleave", function () {
        // Re-trigger layout by clicking to reset
        clicks = clicks; // keeps current state
    });
}