function clock() {
  const monthNames = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();

  document.getElementById("date").innerHTML = `
  ${dayNames[today.getDay()]} 
  ${today.getDate()} 
  ${monthNames[today.getMonth()]} 
  ${today.getFullYear()}
  `;

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let day = h<11 ? 'AM': 'PM';

  h = h<10? '0'+h: h;
  m = m<10? '0'+m: m;
  s = s<10? '0'+s: s;

  document.getElementById('hours').innerHTML = h;
  document.getElementById('min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;

}
let inter = setInterval(clock, 400);
