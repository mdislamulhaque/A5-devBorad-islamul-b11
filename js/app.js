document.getElementById("random-color").addEventListener("click", function () {
  let bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = bgColor;
});

document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "../blog.html";
});

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const currentDate = new Date();
const dayName = daysOfWeek[currentDate.getDay()];
const monthName = monthsOfYear[currentDate.getMonth()];
const dayOfMonth = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedDate = `${dayName}, ${monthName} ${dayOfMonth} ${year}`;

document.getElementById("day-date").innerText = formattedDate;

const taskCount = document.getElementById("task-count");
let taskCountValue = parseInt(taskCount.innerText.trim(), 10);

const taskCountComplete = document.getElementById("task-complete-count");
let taskCountCompleteValue = parseInt(taskCountComplete.innerText.trim(), 10);

const buttons = document.querySelectorAll(".btn");

for (const button of buttons) {
  button.addEventListener("click", function () {
    const cardTitle = button
      .closest(".card")
      .querySelector(".card-title").innerText;
    button.classList.add(
      "bg-gray-400",
      "cursor-not-allowed",
      "hover:bg-gray-400"
    );
    button.classList.remove("cursor-pointer");
    button.disabled = true;
    taskCountValue--;
    taskCount.innerText = taskCountValue.toString().padStart(2, "0");
    taskCountCompleteValue++;
    taskCountComplete.innerText = taskCountCompleteValue
      .toString()
      .padStart(2, "0");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("p-2", "mt-2", "bg-gray-200", "rounded");

    const currentDateTime = new Date();
    const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    taskDiv.innerText = `You have complete the task ${cardTitle} at ${formattedTime}`;
    taskContainer.appendChild(taskDiv);

    alert("Board Updated Successfully");
  });
}

document.getElementById("card-last").addEventListener("click", function () {
  alert("Congrates!!! You have completed all the current task");
});

document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("taskContainer").innerHTML = "";
});
