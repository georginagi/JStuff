window.onload = function(){
    alert("Alert")
}
function showPopUpText() {
    alert(document.getElementById("PopUpText").value)
}

let x = document.getElementById("userInput")
function inputCharLengthCount(){
    return x.value.length
}

function reportUserInputToHtml(){
    document.getElementById("textarea").innerHTML = x.value
}
