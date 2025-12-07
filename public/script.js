let score = 0;
const scoreSpan = document.getElementById("score");
const highScoreSpan = document.getElementById("highscore");
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    score++;
    scoreSpan.innerText = score;

    // Backendga score yuborish
    const res = await fetch("/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score })
    });

    const data = await res.json();
    highScoreSpan.innerText = data.highScore;
});
