//alert('xd')
chrome.runtime.onMessage.addListener(function (request){
    const text = document.querySelectorAll('h3.jsx-1307288772');
    const phrase = document.querySelectorAll('input.jsx-856742297')
    if (request != "Draw"){
        phrase[0].placeholder = request;
    }
    var draw = new SpeechSynthesisUtterance();
    draw.text = text[0].textContent;
    window.speechSynthesis.speak(draw);   
})