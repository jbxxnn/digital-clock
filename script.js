function doDate() {
  var today = new Date();
  const hour = formatTime(today.getHours());
  const minutes = formatTime(today.getMinutes());
  const seconds = formatTime(today.getSeconds());
  const todayDay = today.getDay();
  const currMonth = today.getMonth();
  const currDate = today.getDate();
  const currYear = today.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".sec-container").innerText = seconds;
  document.querySelector(".min-container").innerText = minutes;
  document.querySelector(".hour-container").innerText = hour;

  document.querySelector(
    ".day-month-year"
  ).innerHTML = `${days[todayDay]}, ${months[currMonth]} ${currDate} ${currYear}`;

  if (hour >= 12) {
    document.querySelector(".daytime-container").innerText = "PM";
  } else {
    document.querySelector(".daytime-container").innerText = "AM";
  }

  function formatTime(time) {
    if (time < 10 && time.length != 2) {
      return "0" + time;
    }
    return time;
  }
}
setInterval(doDate, 1000);
