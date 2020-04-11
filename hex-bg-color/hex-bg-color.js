const bgChange = () => {
    const randomColor = Math.floor(Math.random() * 16777245).toString(16); 
    document.body.style.backgroundColor = "#" + randomColor; 
    color.innerHTML = "#" + randomColor; 
}
bgChange(); 

