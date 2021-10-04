const bigger = () =>{
    document.getElementById("primaryTextArea").
        style.fontSize = "24pt";
}
const fancy = () => {

    if(document.getElementById("FancyShmancy").checked){
        document.getElementById("primaryTextArea").
            style.fontWeight = "bold";
        document.getElementById("primaryTextArea").
            style.color = "blue";
        document.getElementById("primaryTextArea").
            style.textDecoration = "underline";
    }  
    if (document.getElementById("BoringBetty").checked){
        document.getElementById("primaryTextArea").
            style.fontWeight = "normal";
        document.getElementById("primaryTextArea").
            style.color = "black";
        document.getElementById("primaryTextArea").
            style.textDecoration = "none";
    }
    
}

const moo = () => {
    var str = document.getElementById('primaryTextArea').value;
    document.getElementById('primaryTextArea').value = 
        str.toUpperCase();

    var parts = document.getElementById('primaryTextArea').value.split(".");
    //let result = parts.join("-Moo.");
    document.getElementById('primaryTextArea').value = parts.join("-Moo.");
    
    
}