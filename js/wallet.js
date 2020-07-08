var total = 0;


function addMoney(){
    var a = prompt("Add money: ");
    document.getElementById("tot").innerHTML = parseInt(a) + parseInt(total);
    total = parseInt(a) + parseInt(total);
}

function withdrawMoney(){
    var b = prompt("Withdraw Money: ");
    document.getElementById("tot").innerHTML =parseInt(total) - parseInt(b);
    total = parseInt(total) - parseInt(b);
}
