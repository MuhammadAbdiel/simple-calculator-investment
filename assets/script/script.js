let countMonth = document.getElementById("monthly");

countMonth.addEventListener("click", function () {
  let longMonth = document.getElementById("long-month");
  let balanceMonth = parseFloat(document.getElementById("balance-month").value);
  let returnMonth = parseFloat(document.getElementById("return-month").value);
  let totalMonth = document.getElementById("total-month");

  document.querySelector(".show-month").style.display = "block";

  let long = parseInt(longMonth.value) * 12;

  for (let i = 1; i <= long; i++) {
    if (i == long) {
      let newBalance = balanceMonth + balanceMonth * returnMonth;
      totalMonth.innerHTML += newBalance.toFixed(2) + " USDT";
      balanceMonth = newBalance;
    } else {
      let newBalance = balanceMonth + balanceMonth * returnMonth;
      balanceMonth = newBalance;
    }
  }
});
