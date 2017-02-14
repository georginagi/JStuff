function loadAlert() {
   alert("Alert");
};
window.onload = function(){
    loadAlert();
};
function countChars(){
    return document.getElementById("charCount").value.length;
};
function fromTextArea(){
    document.getElementById("textarea").innerHTML = document.getElementById("charCount").value;
};
