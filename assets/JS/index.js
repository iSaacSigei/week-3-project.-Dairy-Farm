

function totalProduction() {
    let shedAProduction = document.getElementsByName("shedAProduction")[0].value;
    let shedBProduction = document.getElementsByName("shedBProduction")[0].value;
    let shedCProduction = document.getElementsByName("shedCProduction")[0].value;
    let shedDProduction = document.getElementsByName("shedDProduction")[0].value;
    let total =
      Number(shedAProduction) +
      Number(shedBProduction) +
      Number(shedCProduction) +
      Number(shedDProduction);
  
    document.getElementsByName("sum")[0].value = total;
  
    let shedAtotal = `Your production in shed A is ${shedAProduction} `;
    let shedBtotal = `Your production in shed B is ${shedBProduction} `;
    let shedCtotal = `Your production in shed C is ${shedCProduction} `;
    let shedDtotal = `Your production in shed D is ${shedDProduction} `;
  
    document.getElementsByClassName("shedA-total")[0].innerHTML = shedAtotal;
    document.getElementsByClassName("shedB-total")[0].innerHTML = shedBtotal;
    document.getElementsByClassName("shedC-total")[0].innerHTML = shedCtotal;
    document.getElementsByClassName("shedD-total")[0].innerHTML = shedDtotal;

    totalShedsProduction = `Your total production is ${total} `;

   document.getElementsByClassName("total-production")[0].innerHTML =
    totalShedsProduction;
}

totalProduction();

function incomeOverTime(selling_price, time) {
  let totals = document.getElementsByName("total-daily")[0].value;
  let yearlyEarnings = Number(totals) * selling_price * time;

  let yearlyEarningsString = `Your yearly earnings are ${yearlyEarnings}`;

  document.getElementsByClassName("timely-earnings")[0].innerHTML = yearlyEarningsString

}
incomeOverTime(45, 365);

function monthlyIncome() {
  let totals = document.getElementsByName("total-output")[0].value;

  let janEarnings = `Your income for January is ${Number(totals) * 45 * 31}`;
  let febEarnings = `Your income for February is ${Number(totals) * 45 * 29}`;
  let marchEarnings = `Your income for March is ${Number(totals) * 45 * 31}`;
  let aprEarnings = `Your income for April is ${Number(totals) * 45 * 30}`;
  let mayEarnings = `Your income for May is ${Number(totals) * 45 * 31}`;
  let juneEarnings = `Your income for June is ${Number(totals) * 45 * 30}`;
  let julyEarnings = `Your income for July is ${Number(totals) * 45 * 31}`;
  let augEarnings = `Your income for August is ${Number(totals) * 45 * 31}`;
  let sepEarnings = `Your income for September is ${Number(totals) * 45 * 30}`;
  let octEarnings = `Your income for October is ${Number(totals) * 45 * 31}`;
  let novEarnings = `Your income for November is ${Number(totals) * 45 * 30}`;
  let decEarnings = `Your income for December is ${Number(totals) * 45 * 31}`;
 