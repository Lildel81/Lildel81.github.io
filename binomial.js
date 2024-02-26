calculateBinomial();

function calculateBinomial(){
    let N = document.getElementById("N").value;
    let R = document.getElementById("X").value;
    let P = document.getElementById("P").value;

let ActN = 0;
let ActR = 0;
for (let i = N; i > 1; i--){
    ActN = i*(i-1);
}
for (let i = R; i > 1; i--){
    ActR = i*(i-1);
}
let C = ActN/(ActN*ActR);
let Result = C*Math.pow(P, R)*Math.pow(1-P, N-R);

document.getElementById("output").style.fontSize = "30px"
document.getElementById("output").innerText = "The probability is " + Result;
console.log(Result);
}