function nextFib(a, b){
  return a + b;
}

let n1 = 1;
let n2 = 1;
let ans = 0;
let fib = nextFib(n1, n2);

while(fib < 4000000){
  if(fib % 2 == 0){
    ans += fib;
  }

  n1 = n2;
  n2 = fib;
  fib = nextFib(n1, n2);
}

console.log(ans);
