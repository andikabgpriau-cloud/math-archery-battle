body {
  margin: 0;
  font-family: 'Fredoka One', cursive;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
  text-align: center;
}

.screen { display: none; padding: 20px; }
.active { display: block; }

h1 { animation: float 3s infinite; }

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.glass {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(12px);
  border-radius: 15px;
  padding: 20px;
  max-width: 400px;
  margin: auto;
}

select, button {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 10px;
  font-size: 16px;
}

button { background: gold; cursor: pointer; }

.targets {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  max-width: 500px;
  margin: auto;
}

.target {
  background: rgba(255,255,255,0.2);
  padding: 25px;
  border-radius: 15px;
  font-size: 24px;
  cursor: pointer;
}

.correct { background: green; }
.wrong { background: crimson; }

.bow { font-size: 80px; margin: 20px; }

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress {
  background: #333;
  height: 10px;
  border-radius: 10px;
}

#progressBar {
  height: 10px;
  background: lime;
  width: 100%;
}

.playerCard {
  background: rgba(255,255,255,0.2);
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
}

.activePlayer {
  border: 3px solid gold;
}

@media (max-width: 600px) {
  .target { font-size: 28px; }
  .bow { font-size: 90px; }
}
