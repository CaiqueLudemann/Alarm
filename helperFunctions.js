const nameInput = document.getElementById('name');
const delayInput = document.getElementById('delay');
const output = document.querySelector('h2');

export function alarm(name, delay){
  return new Promise((resolve, reject)=>{
    if (delay < 0) {
      throw new Error(`${delay} is invalid input; Must be positive integer.`)
    } else if (isNaN(delay)){
      throw new Error(`${delay} is not a number; Must be positive integer.`)
    }
    setTimeout(()=>{
      resolve(`Get yo ass up ${name}`);
    }, parseInt(delayInput.value))
  })
};

export async function displayMessage() {
  output.innerHTML = "loading...";
  try {
    const wakeup = await alarm(nameInput.value, delayInput.value)
    output.innerHTML = wakeup;
  } catch (error) {
    output.innerHTML = `${error}`
  }
}


