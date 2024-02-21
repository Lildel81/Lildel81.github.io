function displayText(){
    // Get the value from the text box
    let A = document.getElementById("inputTextA").value;
    let B = document.getElementById("inputTextB").value;
    let C = document.getElementById("inputTextC").value;
    // Display the value on the webpage

    // Building the value of the quotient;
    let R = (B*B)-(4*A*C);
    if (R > 0){
    let r = Math.sqrt((B*B)-(4*A*C))
    // Building the Denominator
    let d = 2*A;
    //Building the Formula
    let f = ((0-B)-r)/d;
    let F = ((0-B)+r)/d;
    var input = document.getElementById("inputTextC");
    input.addEventListener("keypress", function(event){
        if (event.key == "Enter") {
           // event.preventDefault();
            document.getElementById("myBtn").click();
        }
    });
    document.getElementById("output").style.fontSize = "30px";
    document.getElementById("output").innerText = "The two roots are " + f + " and " + F; 

    }
    else {
        document.getElementById("output").innerText = "This makes an imaginary number and cannot be computed";
    }

    
}