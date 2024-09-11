function openOverlay(id){
    document.getElementById(id).style.display = "flex";
}

function closeOverlay(id){
    document.getElementById(id).style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var list = document.getElementById("table").getElementsByTagName("button"); 
    for (let item of list) {
        item.onclick = function() {
            openOverlay("userman")
        };
    }
    });