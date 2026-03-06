// xử lý form điểm số
const form = document.getElementById("scoreForm");
const scoreList = document.getElementById("scoreList");

//form.addEventListener("submit", async (e) => {
//  e.preventDefault();
//  const name = document.getElementById("name").value;
//  const score = parseInt(document.getElementById("score").value, 10);
//
//  await fetch("http://localhost:3000/add-score", {
//    method: "POST",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify({ name, score })
//  });
//
//  const res = await fetch("http://localhost:3000/scores");
//  const scores = await res.json();
//  scoreList.innerHTML = scores.map(s => `<li>${s.name}: ${s.score}</li>`).join("");
//});

// xử lý nút About
document.addEventListener("DOMContentLoaded", () => {
  const aboutLink = document.getElementById("aboutLink");
  const aboutBox = document.getElementById("aboutBox");
  const overlay = document.getElementById("overlay");

  aboutLink.addEventListener("click", () => {
    const isVisible = aboutBox.style.opacity === 1;
    aboutBox.classList.toggle("show");
    overlay.classList.toggle("show") = isVisible ? "none" : "block";
  });


  // click overlay để đóng
  overlay.addEventListener("click", () => {
    overlay.classList.toggle("show");
    aboutBox.classList.toggle("show");
  });
});