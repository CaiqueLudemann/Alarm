import {alarm} from './helperFunctions.js';


const nameInput = document.getElementById('name');
const delayInput = document.getElementById('delay');
const submit = document.getElementById('submit');
const output = document.querySelector('h2');

async function displayMessage() {
  output.innerHTML = "loading...";
  try {
    const wakeup = await alarm(nameInput.value, parseInt(delayInput.value))
    output.innerHTML = wakeup;
  } catch (error) {
    output.innerHTML = `${error}`
  }
}

submit.addEventListener('click', displayMessage);
