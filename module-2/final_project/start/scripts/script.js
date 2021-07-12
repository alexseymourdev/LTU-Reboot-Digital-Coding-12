let arrButtons = document.querySelectorAll('.filterButton');

for(counter=0; counter < arrButtons.length; counter++){
    let currentButton = arrButtons[counter];
    console.log(currentButton);
    currentButton.addEventListener('click',showHideImages)
}

function showHideImages(event){
    console.log(event.target);
}