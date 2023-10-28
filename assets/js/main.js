const tripDistance = document.querySelector("#trip-distance")
const fuelEfficiency = document.querySelector("#fuel-efficiency")
const fuelCost = document.querySelector("#fuel-cost")
const fName =  document.querySelector("#name")
const calcuBtn = document.querySelector("#calcuBtn")
 

calcuBtn.addEventListener("click", (e) => {
    e.preventDefault();


    if(tripDistance.value === ""){
        alert("enter the value to calculate")
    }

    else {

    
    let distanceKm = tripDistance.value; 
    let fuelEfficiencyV = fuelEfficiency.value;
    let fuelCostV =fuelCost.value;

    const result = (distanceKm / fuelEfficiencyV) * fuelCostV

    const finalMsg = "Your fuel cost will be around :₹" + result

    alert(finalMsg)
    }

})







