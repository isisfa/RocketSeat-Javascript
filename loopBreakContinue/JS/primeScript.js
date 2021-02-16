const CEILING = 100;

function primeTest(testValue) {
    let isPrime = true;
    for ( let i = 2; i < testValue; i++ ) {
        if ( testValue % i === 0 ) {
            isPrime = false;
        }
    }
    return isPrime;
}

for (let i = 2; i <= CEILING; i++) {
    let result = primeTest(i);

    if (result == false) {
        continue;               //ou seja, ignora os falsos. Só exibe true e continua.
    }

    console.log(i + " é um numero primo. ");
}
