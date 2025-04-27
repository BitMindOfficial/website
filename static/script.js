document.addEventListener('DOMContentLoaded', ()=>{
    const inputText = document.getElementById('word');
    const sendBtn = document.getElementById('send');

    sendBtn.addEventListener('click', ()=>{
        sendWord()
    })
    inputText.addEventListener('keydown', (e)=>{
        if (e.key === 'Enter'){
            sendWord()
        }
    })

    function sendWord(){
        word = inputText.value
        if (word.trim() != ''){
            window.open(`https://dictionary.bitmindai.in?word=${word}`, "_blank");
        } 
    }


    const video = document.getElementById('video');

    video.addEventListener('ended', function() {
        video.controls = true; // Show controls after video ends
        video.muted = false;   // Optional: unmute after autoplay ends
    });
})