document.getElementById("random-color").addEventListener("click", function () {
  let bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = bgColor;
});

document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "../blog.html";
});
