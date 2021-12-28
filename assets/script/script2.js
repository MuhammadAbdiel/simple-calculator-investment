let countYear = document.getElementById("annually");
let updateBalance = 0;

countYear.addEventListener("click", function () {
  let longYear = document.getElementById("long-year");
  let balanceYear = parseFloat(document.getElementById("balance-year").value);
  let returnYear = parseFloat(document.getElementById("return-year").value);
  let totalYear = document.getElementById("total-year");

  document.querySelector(".show-year").style.display = "block";

  let long2 = parseInt(longYear.value) * 12;

  updateBalance = balanceYear;

  for (let i = 1; i <= long2; i++) {
    if (i == long2) {
      if (i % 12 == 0) {
        let newBalance2 = updateBalance + updateBalance * returnYear;
        totalYear.innerHTML += newBalance2.toFixed(2) + " USDT";
        updateBalance = newBalance2 + balanceYear;
      } else {
        newBalance2 = updateBalance;
        updateBalance = newBalance2 + balanceYear;
      }
    } else {
      if (i % 12 == 0) {
        let newBalance2 = updateBalance + updateBalance * returnYear;
        updateBalance = newBalance2 + balanceYear;
      } else {
        newBalance2 = updateBalance;
        updateBalance = newBalance2 + balanceYear;
      }
    }
  }
});
