function quoteGenerator() {

const quotes = [
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    }, 
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theorore Roosevelt"
    },
    {
        quote: "We must not allow other people's limited perceptopn to define us.",
        author: "Virginia Satir"
    },
]; 

const button = document.getElementById("button"); 
button.addEventListener("click", function quoteRandomizer() {
    let random = Math.floor(Math.random() * quotes.length); 
    document.getElementById("quoteContainer").textContent = quotes[random].quote;
    document.getElementById("quoteAuthor").textContent = quotes[random].author;
}); 
} 