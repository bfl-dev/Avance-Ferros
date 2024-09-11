const origin = document.getElementById('origin');
const destination = document.getElementById('destination');

function updateOptions(select1, select2) {
    const selectedValue = select1.value;
    const options = select2.querySelectorAll('option');

    options.forEach(option => {
        if (option.value === selectedValue || option.value === "") {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    });
}

origin.addEventListener('change', function() {
    updateOptions(origin, destination);
});

destination.addEventListener('change', function() {
    updateOptions(destination, origin);
});

document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('travel-date');
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const minDate = `${year}-${month}-${day}`;
    
    dateInput.setAttribute('min', minDate);
});