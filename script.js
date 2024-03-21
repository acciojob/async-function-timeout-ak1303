let submit = document.getElementById('btn');
let textInput = document.getElementById('text');
let delayInput = document.getElementById('delay');
let output = document.getElementById('output');

let msg = "", delay = 0;

textInput.addEventListener('change', (e) => {
    msg = e.target.value;
});

delayInput.addEventListener('change', (e) => {
    delay = parseInt(e.target.value);
});

submit.addEventListener('click', async (e) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    output.innerHTML = msg;
});