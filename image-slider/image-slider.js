function cats () {
    const pictures = [
        "cat-0", 
        "cat-2",
        "cat-3",
        "cat-4",
        "cat-5"
    ]; 
    const buttons = document.querySelectorAll('.btn');
    const imageDIV = document.querySelector('.image-container');

    let counter = 0; 

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            if (button.classList.contains('left')){
                counter--; 
                if(counter < 0) {
                    counter = pictures.length -1; 
                }
                imageDIV.getElementsByClassName.backgroundImage = `url('images/${pictures[counter]}.jpg')`;
            }
            if (button.classList.contains('right')) {
                counter++; 
                if (counter > pictures.length -1) {
                    counter = 0; 
                }
                imageDIV.style.backgroundImage = `url('images/${pictures[counter]}.jpg')`; 
            }
        })
    })

}; 
cats(); 