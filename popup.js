document.addEventListener('DOMContentLoaded', function() {
    // checking by google
  if (!('webkitSpeechRecognition' in window)) {
    console.log('GOOGLE: not working on this browser');
  } else {
    console.log('GOOGLE: working');
  }

  //your way
  if (window.hasOwnProperty('webkitSpeechRecognition')) {
    console.log('YOUR: working');
  } else {
    console.log('YOUR: not working on this browser');
  }

    var drawVoiceButton = document.getElementById('drawVoice');
    var startRecordButton = document.getElementById('startRecord');
    var stopRecordButton = document.getElementById('stopRecord');

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    let recognition = new SpeechRecognition();

    recognition.lang = 'es-ES';
    recognition.continuous = true;
    recognition.interimResults = false;

    drawVoiceButton.addEventListener('click', function() {  
      chrome.tabs.query({currentWindow: true, active: true},
        function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, 'Draw')
        })
      }, false)

    recognition.onresult = (event) =>{
      console.log('asd');
      const results = event.results[0][0].transcript;
      chrome.tabs.query({currentWindow: true, active: true},
        function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, results)
        })
      console.log(results);
    }

    startRecordButton.addEventListener('click', function() {  
      recognition.start();
      console.log('start');
        })

    stopRecordButton.addEventListener('click', function() {  
      recognition.stop();
      console.log('Stop');
        })

    }, false)

