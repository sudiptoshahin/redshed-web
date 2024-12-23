
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

function onHandleAddType(event) {
    event.preventDefault();
    window.location.replace('/admin/dashboard/inventory/type/add');
}

function onHandleAddCategory(event) {
    window.location.replace('/admin/dashboard/inventory/category/add');
}

function onChangeTypeAddImage(event) {
    const typeImage = document.getElementById('add_image_show');
    const imagePreviewContainer = document.getElementById('type_add_image_container');

    const uploaded_file = event.target.files[0];
    // imagePreviewContainer.textContent = uploaded_file.name;
    const reader = new FileReader();
    reader.onload = function(e) {
        console.log('___FILE_READER_EVENT___', e);
        imagePreviewContainer.src = e.target.result;
        imagePreviewContainer.style.display = 'block';
    }
    reader.readAsDataURL(uploaded_file);

    console.log('typeImage', uploaded_file);
}