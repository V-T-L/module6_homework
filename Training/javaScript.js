// 1.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, true];
let evenNum = 0
let oddNum = 0
let otherNum = 0 
function a (allString) {
  for (let i = 0; i < allString.length; i++)
  if (allString[i] === 0 || (typeof (allString[i]) !== 'number')){
    otherNum++
  } else {
    if (allString[i] % 2 === 0) {
        evenNum++
    } else {
        oddNum++
    }
  }
  }

  a (arr)
  console.log (evenNum);
  console.log (oddNum);
  console.log (otherNum)

// 2.

function anyNumber (num) {
  if((num == 0) || (num > 1000)) 
    return console.log ('Введите число от 1 до 1000')
    for (let i = 2; i <= num; i++) {  
        if (num % i === 0) {
        return alert (num  + ' Число простое')
      } else {
       return alert (num + ' Число составное')
      }
    
  }
}

anyNumber(10)

// 3.

function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(5);
console.log( f(0), f(1), f(2) );

console.log( sum(1)(2), sum(2)(2), sum(40)(2) );

// 4. 
function intUser(a,b) {
  let i = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}

intUser(5, 15);

// 5. 

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}