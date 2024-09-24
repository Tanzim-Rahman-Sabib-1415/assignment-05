// global coin
let coin = 10000;
let donations = [0,0,0]
console.log("Taking JS");

console.log(document.getElementById("balance").innerHTML.concat(coin))
document.getElementById("balance").innerHTML = coin
document.getElementById("d-1").innerHTML = donations[0] + " BDT"
document.getElementById("d-2").innerHTML = donations[1] + " BDT"
document.getElementById("d-3").innerHTML = donations[2] + " BDT"

function dono(d_id){
    id = "d-amount" + d_id
    a_id = "d-" + d_id
    const money = document.getElementById(id).value
    console.log(money)
    if (money === ""){
        alert("Enter Donation Amount")
        return
    }
    else if (money <= 0){
        alert("Donation Amount can not be negative")
        return
    }
    else if(money > coin){
        alert("Insufficient Balance")
        return
    }
    coin -= money
    donations[d_id-1] -= -money
    document.getElementById("balance").innerHTML = coin
    document.getElementById(a_id).innerHTML = donations[d_id-1] + " BDT"

    // create card
    const card_text = ["Flood Relief in Noakhali","Flood Relief in Feni","Aid for Injured in the Quota Movement"]
    const date = new Date()
    const section = document.getElementById("history")
    section.innerHTML += `
    <div class="shadow-xl w-3/4 mx-auto p-4 mb-2">
                <h2>${money} Taka is Donated for ${card_text[d_id-1]}, Bangladesh</h2>
                <p>${date}</p>
            </div>
    `
    
}

function toogle_history(){
    document.getElementById("donation").classList.add("hidden")
    document.getElementById("history").classList.remove("hidden")
}
function toogle_donation(){
    document.getElementById("history").classList.add("hidden")
    document.getElementById("donation").classList.remove("hidden")
}