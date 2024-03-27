
//function alarm(){

//alert("Hello world");

document.getElementById("toFancy").addEventListener("click", function(){
    console.log("clicked");
        let content = document.getElementById("textElement").value;
        console.log("content: ", content)
        const printContentDiv = document.getElementById("fancyContent");
        if (content.trim() != ""){
            printContentDiv.style.fontFamily = "comicsans"
            printContentDiv.style.fontSize = "24px";
            printContentDiv.textContent = content
           // window.print();
    
        }else{
            alert("Please enter something in the field");
        }
    });
//}
function makeItFancy(){

    let fancyRadio = document.getElementById("fancyshmancy");
    let boringRadio = document.getElementById("boringBetty");
    let textArea = document.getElementById("fancyContent");

    if(fancyRadio.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline"
        //alert("Font weight set to bold");
    }
    else if(boringRadio.checked){
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        //alert("font weight set to normal");
    }
     
}

//function moo(){
    document.getElementById('moo').addEventListener("click", function(){
    let text = document.getElementById("textElement").value;
    let textArea = document.getElementById("fancyContent");
    const printContentDiv = document.getElementById("fancyContent");
    let moo = "moo";
    let splittext = text.split(" ");
    let finaltext = '';
    for(let i = 0; i < splittext.length; i++){
        splittext[i]=splittext[i]+moo;
    }
    finaltext=splittext.join();
    printContentDiv.textContent = finaltext;
    })

    

//}