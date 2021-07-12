let objAnimalFilters = {
    init:function(){
        this.selectElements();
        this.addEventListeners();
    },
    selectElements:function(){
        this.arrButtons = document.querySelectorAll('.filterButton');
        // console.log(arrButtons);
        this.arrImages = document.querySelectorAll('.animalImage');
        // console.log(this);
    },
    addEventListeners:function(){
        _self = this;
        for(counter=0; counter < this.arrButtons.length; counter++){
            let currentButton = this.arrButtons[counter];
            // console.log(currentButton);
            currentButton.addEventListener('click',_self.showHideImages)
        }
    },
    showHideImages:function(event){
        let animalFilter = event.target.getAttribute('animal');
        // console.log(animalFilter);
        for(counter=0; counter < _self.arrImages.length; counter++){
            let currentImage = _self.arrImages[counter];
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
}
objAnimalFilters.init();