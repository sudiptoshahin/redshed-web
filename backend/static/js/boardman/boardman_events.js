
// class BoardmanEvents

window.onclick = function (event) {
    // console.log('event', event);
    if (!event.target.matches('.dashboard-dropbtn')) {
        var dropdowns = document.getElementsByClassName("dashboard-dropdown-content");

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function onHandleInventroyDropdown() {
    document.getElementById("inventorySettingDropdown").classList.toggle('show');
}