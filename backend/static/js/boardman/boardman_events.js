
/** all variables */
let cropperInstance = null;
let typeCroppedImage = null;
let categoryCroppedImage = null;
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
        crop: function (e) {
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
    reader.onload = function (e) {

        if (cropperInstance) {
            cropperInstance.destroy();
            cropperInstance = null;
        }

        // imagePreviewContainer.src = e.target.result;
        imagePreviewContainer.src = e.target.result;
        imagePreviewContainer.style.display = 'block';
        imagePreviewContainer.onload = function () {
            cropperInstance = imageCropper(imagePreviewContainer);
            imagePreviewContainer.style.display = 'block';
        }
    }
    reader.readAsDataURL(uploaded_file);
}

function getFileName(name) {
    let tempFileName = String(name);
    if (tempFileName === "" || tempFileName === null) {
        tempFileName = String(Date.now());
    };
    
    tempFileName = tempFileName.toLowerCase().split(" ").join("_");
    tempFileName = `${tempFileName}_${Date.now()}`;
    return tempFileName;
}

function handleCroppedBtn(event) {
    const imageInput = document.getElementById('type_upload_img');
    const catImageInput = document.getElementById('cat_upload_img');
    
    const file_name = `${Date.now()}`;

    const croppedImgContainer = document.getElementById('cropped_img');
    event.preventDefault();
    if (!cropperInstance) {
        console.error('Cropper instance is not available.');
        return;
    }

    const croppedCanvas = cropperInstance.getCroppedCanvas();
    const tempCroppedImage = croppedCanvas.toDataURL('image/png');
    croppedCanvas.toBlob((blob) => {
        if (blob) {
            const file = new File([blob], `${file_name}.jpg`, {
                type: blob.type,
            });
            // croppedImageData = file;
            console.log('cropped_img', file);
            if (imageInput === null) {
                catImageInput.value = file;
            } if (catImageInput === null) {
                imageInput.value = file;
            }
        }
    }, 'image/jpg');

    croppedImgContainer.src = tempCroppedImage;
    croppedImgContainer.style.display = 'block';

}

function onHandleAddTypeCancel(event) {
    event.preventDefault();
    window.location.replace('/admin/dashboard/inventory/type');
}

function onHandleCategoryList(event) {
    event.preventDefault();
    window.location.replace('/admin/dashboard/inventory/category');
}

function onaHandleCategoryView(event, categoryId) {
    event.preventDefault();
    // console.log('categoryId', categoryId)
    window.location.replace(`/admin/dashboard/inventory/category/${categoryId}/details`);
}

function onHandleEditCategory(event, categoryId) {
    window.location.replace(`/admin/dashboard/inventory/category/${categoryId}/edit`);
}

function onHadleDeleteCategory(event, categoryId) {
    // console.log('categoryId', categoryId); 
    window.location.href = `/admin/dashboard/inventory/category/${categoryId}/delete`;
    // window.location.reload(true);
}