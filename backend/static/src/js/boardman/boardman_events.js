
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



function onChangeImageInput(event, containerId) {
    event.preventDefault();
    imagePreviewContainer = document.getElementById(containerId);

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

// function handleCroppedBtn(event, containerId) {
//     event.preventDefault();
//     // here default parent container is always input-section
//     const parentContainer = document.getElementsByClassName('upload-img');
//     const imageInput = document.getElementById(containerId);
//     // const catImageInput = document.getElementById('cat_upload_img');

//     const file_name = `${Date.now()}`;

//     const croppedImgContainer = document.getElementById('cropped_img');
//     if (!cropperInstance) {
//         console.error('Cropper instance is not available.');
//         return;
//     }

//     const croppedCanvas = cropperInstance.getCroppedCanvas();
//     const tempCroppedImage = croppedCanvas.toDataURL('image/png');
//     croppedCanvas.toBlob((blob) => {
//         if (blob) {
//             const file = new File([blob], `${file_name}.jpg`, {
//                 type: blob.type,
//             });
//             // croppedImageData = file;
//             console.log('cropped_img', file);
//             // if (imageInput === null) {
//             //     catImageInput.value = file;
//             // } if (catImageInput === null) {
//             //     imageInput.value = file;
//             // }
//             if (imageInput !== null) {
//                 imageInput.value = file;
//             }
//         }
//     }, 'image/jpg');

//     croppedImgContainer.src = tempCroppedImage;
//     croppedImgContainer.style.display = 'block';

// }

function handleCroppedBtn(event, containerId, parentContainerId) {
    event.preventDefault();

    // here default parent container is always input-section
    let parentContainer = document.getElementById(parentContainerId);
    let imageInput = document.getElementById(containerId);

    let file_name = `${Date.now()}`;
    let croppedImgContainer = document.createElement('img');

    if (!parentContainer) {
        console.error(`Error parent container with ${parentContainerId} not found`);
        return;
    }

    if (!cropperInstance) {
        console.error('Cropper instance is not available.');
        return;
    }

    const croppedCanvas = cropperInstance.getCroppedCanvas();
    const tempCroppedImage = croppedCanvas.toDataURL('image/jpg');

    croppedCanvas.toBlob((blob) => {
        if (blob) {
            const file = new File([blob], `${file_name}.jpg`, {
                type: blob.type,
            });

            // OPTIONAL: If you want to send the file to a server or process it further
            // You CANNOT set it directly to an input's value
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            imageInput.files = dataTransfer.files;
        }
    }, 'image/jpeg');

    croppedImgContainer.id = file_name;
    croppedImgContainer.className = 'cropped-img';
    croppedImgContainer.src = tempCroppedImage;
    croppedImgContainer.style.display = 'block';
    parentContainer.appendChild(croppedImgContainer);
    // console.log('croppedImgContainer', croppedImgContainer);
    // console.log({ 'container':containerId, 'parent': parentContainerId, 'cropperImgCOntainre': croppedImgContainer });

    cropperInstance.destroy();
    parentContainer = null;
    imageInput = null;
    croppedImgContainer = null;
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
    window.location.replace(`/admin/dashboard/inventory/category/${categoryId}/details`);
}

function onHandleEditCategory(event, categoryId) {
    window.location.replace(`/admin/dashboard/inventory/category/${categoryId}/edit`);
}

function onHadleDeleteCategory(event, categoryId) {
    window.location.href = `/admin/dashboard/inventory/category/${categoryId}/delete`;
}

function onHandleDeleteType(event, typeId) {
    window.location.href = `/admin/dashboard/inventory/type/${typeId}/delete`;
}

function onHandleEditType(event, typeId) {
    window.location.replace(`/admin/dashboard/inventory/type/${typeId}/edit`);
}

function onHandleTypeList(event) {
    event.preventDefault();
    window.location.replace('/admin/dashboard/inventory/type');
}

function onHandleTypeDetails(event, typeId) {
    event.preventDefault();
    window.location.replace(`/admin/dashboard/inventory/type/${typeId}/details`);
}

function onHandleAddProduct(event) {
    event.preventDefault();
    window.location.replace(`/admin/dashboard/inventory/product/add`);
}

function onHandleAddProductCancel(event) {
    event.preventDefault();
    window.location.replace(`/admin/dashboard/inventory/product/list`);
}