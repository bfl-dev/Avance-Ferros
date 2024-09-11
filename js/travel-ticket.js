document.getElementById('pay-text-summon').onclick = function(event) {
    event.preventDefault();
    document.getElementById('travel-ticket').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('travel-ticket').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('travel-ticket')) {
        document.getElementById('travel-ticket').style.display = 'none';
    }
}