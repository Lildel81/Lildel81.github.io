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

    document.getElementById("output").innerText = "The result is " + f + " and " + F; 

    }
    else {
        document.getElementById("output").innerText = "This makes an imaginary number and cannot be computed";
    }

    /*let first = (0-B);
    let rad = Math.sqrt(Math.pow(b, 2)-4 * A * C);
    let denominator = (2 * A);

    let root1 = (first - rad)/denominator;
    let root2 = (first + rad)/denominator;
    
    document.getElementById("R1").innerText = "The first root is " + root1;
    document.getElementById("R2").innerText = "The second root is " + root2;*/
}