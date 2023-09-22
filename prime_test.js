const isPrime = (arr) => {
  let num = arr[0];
  if(num<2){
      console.log(`${num} number is prime`);
      return;
  }
  for(let i=2; i<num; i++) {
      if(num%i===0){
          console.log(`${num} number is not prime`);
          return;
      }
  }
  console.log(`${num} number is prime`);
  return;
}