// answer is 1

// from 1 to 4
// from 1 to 5

// from 0 to 4
// from 0 to 4

for (let i = 2; i < 11; i++) {
    if (i % 2 == 0)alert( i );
}

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

let n1;
do {
  n1 = prompt("n > 100?", 0);
} while (num <= 100 && num);

let n = 10;
for (let i = 2; i <= n; i++) { 
    for (let j = 2; j < i; j++)if (i % j == 0)  {
        continue;
    }
    alert( i ); 
}

if(browser == 'Edge') alert("You've got the Edge!");
else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') alert( 'Okay we support these browsers too' );
else alert( 'We hope that this page looks ok!' );

let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}