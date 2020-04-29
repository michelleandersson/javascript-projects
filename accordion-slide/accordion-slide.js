//title and text class 

/*const text = document.querySelector('#text'); 

function hideText(){
    if (text.style.visibility === 'hidden'){
        text.style.visibility = 'visible'; 
    } else {
        text.style.visibility = 'hidden'; 
    }
};*/

$('.location-title').on('click', ()=> {
    $('.location-text').slideToggle(1000); 
}); 

$('.music-title').on('click', ()=> {
    $('.music-text').slideToggle(1000); 
});

$('.notes-title').on('click', ()=> {
    $('.notes-text').slideToggle(1000); 
});

$('.books-title').on('click', ()=> {
    $('.books-text').slideToggle(1000); 
});

$('.tendances-title').on('click', ()=> {
    $('.tendances-text').slideToggle(1000); 
});