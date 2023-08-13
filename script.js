const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const subhanAllahIncrimentBtn = document.getElementById(
  "subhanAllahIncrimentBtn"
);
const subhanAllahDecrimentBtn = document.getElementById(
  "subhanAllahDecrimentBtn"
);

const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
const alhamdulillahIncrimentBtn = document.getElementById(
  "alhamdulillahIncrimentBtn"
);
const alhamdulillahDecrimentBtn = document.getElementById(
  "alhamdulillahDecrimentBtn"
);

const allahuakberDisplay = document.getElementById("allahuakberDisplay");
const allahuakberIncrimentBtn = document.getElementById(
  "allahuakberIncrimentBtn"
);
const allahuakberDecrimentBtn = document.getElementById(
  "allahuakberDecrimentBtn"
);

const resetBtn = document.getElementById("resetBtn");

let subhandAllahInitialValue = 0;
let alhamdulillahhInitialValue = 0;
let allahuakberInitialValue = 0;

// for subhanallah
subhanAllahIncrimentBtn.addEventListener("click", function () {
  if (subhandAllahInitialValue === 33) {
    return alert("you reached the maximum");
  }
  subhandAllahInitialValue += 1;
  subhanAllahDisplay.innerText = subhandAllahInitialValue;
});
subhanAllahDecrimentBtn.addEventListener("click", function () {
  if (subhandAllahInitialValue === 0) {
    return alert("You can't go less than 0");
  }
  subhandAllahInitialValue -= 1;
  subhanAllahDisplay.innerText = subhandAllahInitialValue;
});

// for alhamdulillah
alhamdulillahIncrimentBtn.addEventListener("click", function () {
  if (alhamdulillahhInitialValue === 33) {
    return alert("You can't go higher than 33");
  }
  alhamdulillahhInitialValue += 1;
  alhamdulillahDisplay.innerText = alhamdulillahhInitialValue;
});
alhamdulillahDecrimentBtn.addEventListener("click", function () {
  if (alhamdulillahhInitialValue === 0) {
    return alert("You can't go less than 0");
  }
  alhamdulillahhInitialValue -= 1;
  alhamdulillahDisplay.innerText = alhamdulillahhInitialValue;
});

// for allahuakber
allahuakberIncrimentBtn.addEventListener("click", function () {
  if (allahuakberInitialValue === 34) {
    return alert("You can't go higher than 34");
  }
  allahuakberInitialValue += 1;
  allahuakberDisplay.innerText = allahuakberInitialValue;
});
allahuakberDecrimentBtn.addEventListener("click", function () {
  if (allahuakberInitialValue === 0) {
    return alert("You can't go less than 0");
  }
  allahuakberInitialValue -= 1;
  allahuakberDisplay.innerText = allahuakberInitialValue;
});

// reset button
resetBtn.addEventListener("click", function () {
  subhanAllahDisplay.innerText =
    alhamdulillahDisplay.innerText =
    allahuakberDisplay.innerText =
      0;
});
