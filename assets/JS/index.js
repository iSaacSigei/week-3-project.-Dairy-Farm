

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
  
   