function gettime() {
  const time = new Date();
  let hrs = parseInt(time.getHours());
  let min = parseInt(time.getMinutes());
  let sec = parseInt(time.getSeconds());

  if (hrs < 10) hrs = "0" + hrs;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  document.getElementById("hrs").innerHTML = hrs;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
}

setInterval(gettime, 100);
