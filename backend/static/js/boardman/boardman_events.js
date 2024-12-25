
/** all variables */
let cropperInstance = null;
let typeCroppedImage = null;
let imagePreviewContainer = null;


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

function imageCropper(el) {
    const cropper = new Cropper(el, {
        aspectRatio: 16 / 9,
        viewMode: 1,
        autoCropArea: 1,
        crop: function(e) {
            console.log('WIDTH', e.detail.width);
            console.log('HEIGHT', e.detail.height);
        },
    });
    return cropper;
}



function onChangeImageInput(event) {
    imagePreviewContainer = document.getElementById('type_add_image_container');

    const uploaded_file = event.target.files[0];
    
    const reader = new FileReader();
    reader.onload = function(e) {
        
        if (cropperInstance) {
            cropperInstance.destroy();
            cropperInstance = null;
        }
        
        // imagePreviewContainer.src = e.target.result;
        imagePreviewContainer.src = e.target.result;
        imagePreviewContainer.style.display = 'block';
        imagePreviewContainer.onload = function() {
            cropperInstance = imageCropper(imagePreviewContainer);
            imagePreviewContainer.style.display = 'block';
        }
    }
    reader.readAsDataURL(uploaded_file);
    
    console.log('typeImage', uploaded_file);
}

function handleCroppedBtn(event) {
    const imageInput = document.getElementById('type_upload_img');
    const croppedImgContainer = document.getElementById('cropped_img');
    event.preventDefault();
    if (!cropperInstance) {
        console.error('Cropper instance is not available.');
        return;
    }

    const croppedCanvas = cropperInstance.getCroppedCanvas();
    const tempCroppedImage = croppedCanvas.toDataURL('image/png');
    let croppedImageData = null;
    croppedCanvas.toBlob((blob) => {
        croppedImageData = blob;
    }, 'image/png');
    typeCroppedImage = tempCroppedImage

    croppedImgContainer.src = typeCroppedImage;
    // imagePreviewContainer.src = typeCroppedImage;
    console.log("__type__", typeof(croppedImageData));


    imageInput.value = croppedImageData;
    croppedImgContainer.style.display = 'block';


    // const imageInput = document.getElementById('type_add_image');
    // imageInput.value = croppedImage;
    // cropperInstance.destroy();
    // cropperInstance = null;

}

function onHandleAddTypeCancel(event) {
    event.preventDefault();
    window.location.replace('/admin/dashboard/inventory/type');
}

function onHandleCategoryAddCancel(event) {
    event.preventDefault();
    window.location.replace('/admin/dashboard/inventory/category');
}