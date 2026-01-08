// ********************************************Start*********************************************

// function isDivisor(){
//     let st = 1;
//     let ed = 100;
//     for(let i =st;i<=ed; i++){
//         if(i%3==0 && i%5==0) {
//             console.log(i);
//         };
//     }
// }
// ********************************************Divisor*********************************************

// isDivisor();
// function isDivisor() {
// 	let c = 0;

// 	for (var i = 1; i <= 3; i++) {
// 		for (let j = 1; j <= 3; j++) {
// 			c++;
// 			if (j % 2 == 0) {
// 				i++;
// 			}
// 		}
// 	}
// 	console.log(c);
// 	console.log(i);
// }

// ********************************************primeNumber*********************************************
// let n = 12;
// console.log(isPrime(5))
// function isPrime(n) {
// 	if(n<=1) return false;
//     for(let i=2;i<=Math.trunc(n/2);i++){
//         if(n%2===0){
//             return false
//         }
//     }
//     return true;
// }
// ********************************************perfect*********************************************

// let n = 6;
// console.log(isPerfect(n))
// function isPerfect(n) {
//     let sum = 0;
//     if(n<1)return false;
//     for(let i=1;i<=Math.trunc(n/2);i++){
//         if(n%i===0){
//            sum+=i;
//         }
//     }
//     return sum==n;
// }

// ********************************************Sum*********************************************

// let n = 622;
// console.log(getSum(n))
// function getSum(n) {
//     let sum = 0;
//     while(n>0){
//         sum += n % 10;
//         n = Math.trunc(n/10);
//     }
//     return sum;
// }

// ********************************************Neon*********************************************

//in javascript 0 means false and any non zero number means true;
// let n = 91;
// console.log(getNeon(n))
// function getNeon(n) {
//     let sq = n*n;
//     let sum = 0;
//     while(sq){
//         sum += sq % 10;
//         sq = Math.trunc(sq/10);
//     }
//     return sum==n;
// }

// ********************************************fact*********************************************

// let n = + prompt("Enter a Number-->")
// console.log(getFact(n));
// function getFact(n) {
// 	let prod = 1;
// 	if (n <= 1) return 1;
// 	while (n >= 1) {
// 		prod = prod * n;
// 		n--;
// 	}
// 	// for (let i = 1; i <= n; i++) {
// 	// 	prod *= i;
// 	// }
// 	return prod;
// }
// ********************************************strong*********************************************
// let n = + prompt("Enter a Number-->")
// let n = 145;
// let temp = n;
// console.log(isStrong(n))

// function isStrong() {
// 	let sum = 0;
// 	while (n>0) {
// 		sum += getFact(n % 10);
//         n=Math.trunc(n/10);
// 	}
// 	return sum == temp;
// }

// ********************************************pow*********************************************
// let n = + prompt("Enter a Number-->")
// let m = 2
// let n = 3;
// console.log(getPow(m,n))

// function getPow(m,n) {
// 	// let res = Math.pow(m,n);
// 	// return res;

//     let prod = 1;
//     for(let i =1;i<=n;i++){
//         prod*=m;
//     }
//     return prod;
// }
// ********************************************Armstrong*********************************************
// let n = + prompt("Enter a Number-->")
// let m = 153;
// // let n = 3;
// console.log(isArmstrong(m));
// // console.log(getLen(m));

// function getPow(m, n) {
// 	let prod = 1;
// 	for (let i = 1; i <= n; i++) {
// 		prod *= m;
// 	}
// 	return prod;
// }
// function getLen(m) {
// 	let len = 0;
// 	while (m > 0) {
// 		len++;
// 		m = Math.trunc(m / 10);
// 	}
// 	return len;
// }
// function isArmstrong(m) {
//     let power = getLen(m);
//     let temp = m;
// 	let sum = 0;
// 	while (m>0) {
// 		sum += getPow((m % 10),power);
// 		m = Math.trunc(m / 10);
// 	}
// 	return sum==temp;
// }
// ********************************************Disare*********************************************
// let n = + prompt("Enter a Number-->")
// let m = 135;
// // let n = 3;
// console.log(isDisare(m));
// // console.log(getLen(m));

// function getPow(m, n) {
// 	let prod = 1;
// 	for (let i = 1; i <= n; i++) {
// 		prod *= m;
// 	}
// 	return prod;
// }
// function getLen(m) {
// 	let len = 0;
// 	while (m > 0) {
// 		len++;
// 		m = Math.trunc(m / 10);
// 	}
// 	return len;
// }
// function isDisare(m) {
//     let temp = m;
// 	let sum = 0;
// 	while (m>0) {
//         let power = getLen(m);
// 		sum += getPow((m % 10),power);
// 		m = Math.trunc(m / 10);
// 	}
// 	return sum==temp;
// }
// ********************************************Spy*********************************************
// let n = + prompt("Enter a Number-->")
// let m = 123;
// console.log(getMul(m)==getSum(m))

// function getMul(m) {
// 	let prod = 1;
// 	while (m > 0) {
// 		prod*=m%10
// 		m = Math.trunc(m / 10);
// 	}
// 	return prod;
// }
// function getSum(m) {
// 	let sum = 0;
// 	while (m > 0) {
// 		sum+=m%10
// 		m = Math.trunc(m / 10);
// 	}
// 	return sum;
// }
// ********************************************Fibo*********************************************

// getFibo(0, 1);
// function getFibo(a, b) {
//     let range = 10
//     console.log(a);
// 	console.log(b);
// 	for (let i = 3; i <= range; i++) {
// 		let c = a + b;
//         a=b;
//         b=c;
//         console.log(c);
// 	}
// }
