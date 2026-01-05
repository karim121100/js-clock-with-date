function updateClock() {
  const now = new Date();

  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("time").textContent = `${h}:${m}:${s}`;

  const options = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent =
    now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();
