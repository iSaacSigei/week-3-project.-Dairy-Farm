

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
  