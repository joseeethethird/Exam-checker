function buildGrids() {
  const num = parseInt(document.getElementById("numItems").value);
  if (isNaN(num) || num < 1 || num > 50) return alert("Choose between 1–50");

  const grids = document.getElementById("grids");
  grids.innerHTML = "";

  ["Answer Key", "Student Answers"].forEach((label, idx) => {
    const container = document.createElement("div");
    container.innerHTML = `<h3>${label}</h3>`;
    for (let i = 1; i <= num; i++) {
      const sel = document.createElement("select");
      sel.id = `${label.replace(" ","")}_${i}`;
      ["-", "A","B","C","D","E"].forEach(opt => {
        const o = document.createElement("option");
        o.value = opt;
        o.textContent = opt;
        sel.appendChild(o);
      });
      container.appendChild(document.createTextNode(i + ". "));
      container.appendChild(sel);
      container.appendChild(document.createElement("br"));
    }
    grids.appendChild(container);
  });
}

function checkScore() {
  const num = parseInt(document.getElementById("numItems").value);
  let score = 0;
  for (let i = 1; i <= num; i++) {
    const key = document.getElementById(`AnswerKey_${i}`).value;
    const ans = document.getElementById(`StudentAnswers_${i}`).value;
    if (key !== "-" && key === ans) score++;
  }
  document.getElementById("result").textContent = 
    `Score: ${score} / ${num}`;
}
