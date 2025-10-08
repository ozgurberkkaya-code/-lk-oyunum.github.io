function startGame(game) {
  const gameArea = document.getElementById("game-area");
  const modal = document.getElementById("game-modal");
  modal.style.display = "block";

  if (game === "tahmin") {
    let number = Math.floor(Math.random() * 100) + 1;
    gameArea.innerHTML = `
      <h2>Sayı Tahmin Oyunu</h2>
      <p>1 ile 100 arasında bir sayı tuttum. Tahmin et!</p>
      <input type="number" id="guess" />
      <button onclick="checkGuess(${number})">Tahmin Et</button>
      <p id="result"></p>
    `;
  } else if (game === "clicker") {
    gameArea.innerHTML = `
      <h2>Clicker Oyunu</h2>
      <p>Butona 5 saniyede ne kadar tıklayabilirsin?</p>
      <button id="clickBtn">Tıkla!</button>
      <p id="clickCount">Tıklama: 0</p>
    `;
    let count = 0;
    const btn = document.getElementById("clickBtn");
    const counter = document.getElementById("clickCount");
    btn.onclick = () => {
      count++;
      counter.textContent = "Tıklama: " + count;
    };
    setTimeout(() => {
      btn.disabled = true;
      counter.innerHTML += "<br> Süre doldu!";
    }, 5000);
  } else {
    gameArea.innerHTML = "<p>Bu oyun henüz hazır değil.</p>";
  }
}

function checkGuess(correctNumber) {
  const guess = parseInt(document.getElementById("guess").value);
  const result = document.getElementById("result");
  if (guess === correctNumber) {
    result.textContent = "Tebrikler! Doğru tahmin.";
  } else if (guess < correctNumber) {
    result.textContent = "Daha büyük bir sayı dene.";
  } else {
    result.textContent = "Daha küçük bir sayı dene.";
  }
}

function closeGame() {
  document.getElementById("game-modal").style.display = "none";
}
