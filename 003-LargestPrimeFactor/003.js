function isPrime(num){
  if ( num == 1 ) { return false; }

  var maxN = Math.floor(Math.sqrt(num));
  for (var i=2; i <= maxN; i++) {
     if ( num % i == 0 ) { return false; }
  }
  return true;
}

//let target = 13195;
let target = 600851475143;

for(let i = 2; i < target; i++){
  if(target%i === 0){
    target = target/i;
  }
}
console.log('answer: ', target)
