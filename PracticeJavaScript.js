function ChangeIt(){
    document.getElementById("ChangeTheText").innerHTML="Paragraph Changed.";
}

function MakeTextGetBigger(){
    document.getElementById("GetBigger").style.fontSize="35px";
}

function RevealIt(){
    document.getElementById("ShowHiddenElement").style.display="block";
    document.getElementById("ShowHiddenElement").style.backgroundColor="black";
    document.getElementById("ShowHiddenElement").style.color="white";
}

function ChangeText(){
    document.getElementById("AddText").innerHTML= 5+6;
}

function PopIt(){
    window.alert("This is a popup Window");
}

function ConsoleLog(){
    console.log("log it");
}

function DoMath(){
    var a, b, c;
    a = 5;
    b=4;
    c = a+b;
    document.getElementById("DoMath").innerHTML=c;
}