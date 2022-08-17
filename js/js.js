setTimeout(() => {
  document.querySelector(".center").classList.toggle("center-none");
}, 1000);
const age = document.querySelector(".input");
const btn = document.querySelector(".btn");
const bob = function () {
  if (isNaN(age.value)) {
    alert("Axperakan Normal Gri Eli Tariqt ☺☺☺");
    age.value = "";
  } else if (age.value < 18) {
    const sum = 18 - age.value;
    document.querySelector(".center").classList.toggle("center-none");
    document.querySelector(".container").innerHTML = `
    <p class = "tuning" >{Gna Mecaci ${sum} Taruc Kgas}</p>`;
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else if (age.value >= 18) {
    document.querySelector(".center").classList.toggle("center-none");
    document.querySelector(".container").innerHTML = `
    <p class = "tuning">Congratulations!!!</p>`;
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
};

btn.addEventListener("click", bob);
