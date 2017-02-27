"use strict";

function loadPage(pageID) {
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", pageID + ".html", true)

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = xhttp.responseText
        }
    }
    
    xhttp.send()
}