

export function alarm(name, delay){
  return new Promise((resolve, reject)=>{
    if (delay < 0) {
      throw new Error(`${delay} is invalid input; Must be positive integer.`)
    } else if (isNaN(delay)){
      throw new Error(`${delay} is not a number; Must be positive integer.`)
    }
    setTimeout(()=>{
      resolve(`Get yo ass up ${name}`);
    },delay)
  })
};



