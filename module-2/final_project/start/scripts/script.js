let arrButtons = document.querySelectorAll('.filterButton');
// console.log(arrButtons);
let arrImages = document.querySelectorAll('.animalImage');
// console.log(arrImages);

for(counter=0; counter < arrButtons.length; counter++){
    let currentButton = arrButtons[counter];
    // console.log(currentButton);
    currentButton.addEventListener('click',showHideImages)
}

function showHideImages(event){
    let animalFilter = event.target.getAttribute('animal');
    // console.log(animalFilter);
    for(counter=0; counter < arrImages.length; counter++){
        let currentImage = arrImages[counter];
        // console.log(currentImage);
        currentImage.style.display = 'none';
        let blnDisplay = false;
        if(currentImage.classList.contains(animalFilter)){
            blnDisplay = true;
        }
        if(animalFilter == 'all'){
            blnDisplay = true;
        }
        if(blnDisplay){
            currentImage.style.display = 'inline';
        }
    }
}