const quizAnswers = {
  answer1: ["năm 1919", "1919","năm 1918","1918"],
  answer2: ["trần phú", "bãi trần phú", "tran phu"],
  answer3: ["2025", "2026"]
}
function checkAnswer(inputId){
  const input = document.getElementById(inputId);
  if(!input) return;
  const val = (input.value||"").trim().toLowerCase();
  const resultEl = document.getElementById("result" + inputId.replace(/[^\d]/g,""));
  if(!resultEl) return;

  const correctList = quizAnswers[inputId] || [];
  const isCorrect = correctList.some(ans => val.includes(ans.toLowerCase()));

  if(isCorrect){
    resultEl.textContent = "✅ Chính xác!";
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = "❌ Sai, thử lại.";
    resultEl.style.color = "crimson";
  }
}
