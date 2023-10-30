const fizzbuzz = (k,a,b) => {
  let resp = [];

  for (let i = 1; i <= k; i++) {
    if (i % a === 0 && i % b === 0) {
      resp.push(`${i} fizzBuzz`);
      //console.log('fizz');
    } else if (i % b === 0) {
      resp.push(`${i} buzz`);
      //console.log('buzz');
    } else if (i % a === 0) {
      resp.push(`${i} fizz`);
      //console.log('fizzBuzz');
    } else {
      resp.push(i);
      //console.log(i);
    }
  }

  return resp;
};

const test = fizzbuzz(100,3,5);



test.forEach((value)=>{
    if(typeof(value)==='string'){
        console.log(value);
    }
});


for( let item of test){

    if(typeof(item)==='number'){
        console.log(item);
    }
}