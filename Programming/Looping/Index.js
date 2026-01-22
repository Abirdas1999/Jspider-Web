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

// ********************************************pattern 1*********************************************

// console.log(getPattern(5));
// function getPattern(n) {
//     let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for(let j =1;j<=n;j++){
//             str+="*\t";
//         }
//         str+="\n"
// 	}
//     return str
// }

// ********************************************pattern 2*********************************************

// console.log(getPattern(5));
// function getPattern(n) {
//     let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for(let j =1;j<=n;j++){
//             str+=j+"\t";
//         }
//         str+="\n"
// 	}
//     return str
// }

// ********************************************pattern 3*********************************************

// console.log(getPattern(5));
// function getPattern(n) {
//     let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for(let j =1;j<=n;j++){
//             str+=i+"\t";
//         }
//         str+="\n"
// 	}
//     return str
// }

// ********************************************pattern 4*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		if (i % 2 == 0) {
// 			for (let j = 1; j <= n; j++) {
// 				str += j + "\t";
// 			}
// 		} else {
// 			for (let j = n; j >= 1; j--) {
// 				str += j + "\t";
// 			}
// 		}

// 		str += "\n";
// 	}
// 	return str;
// }

// ********************************************pattern 5*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for(let j =1;j<=n;j++){
//             if(j==1||i==n||i==1||j==n){
//                 str+="*\t";
//             }else{
//                 str+="\t";
//             }
//         }

// 		str += "\n";
// 	}
// 	return str;
// }
// ********************************************pattern 5*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for(let j =1;j<=n;j++){
//             if(j==i||(i+j)==(n+1)){
//                 str+="*\t";
//             }else{
//                 str+="\t";
//             }
//         }

// 		str += "\n";
// 	}
// 	return str;
// }

// ********************************************>>> pattern 5 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let count = 1;

// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= n; j++) {
// 			str += count++ +"\t";
// 		}
// 		str += "\n";
// 	}
// 	return str;
// }

// ********************************************>>> pattern 5 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {

// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= n; j++) {
// 			str += (n*(i-1)+j) +"\t";
// 		}
// 		str += "\n";
// 	}
// 	return str;
// }

// ********************************************>>> pattern 5 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {

// 	let str = "";

// 	for (let i = 1; i <= n*n; i++) {
// 		str += i+"\t";
//         if(i%n==0){
//             str += "\n";
//         }
// 	}
// 	return str;
// }
// ********************************************>>> pattern 6 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {

// 	let str = "";

// 	for (let i = 1; i <= n*n; i++) {
// 		str += i+"\t";
//         if(i%n==0){
//             str += "\n";
//         }
// 	}
// 	return str;
// }

// ********************************************>>> pattern 6 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {

// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
//         if(i%2==0){
// 			for(let j = i*n;j>(n*(i-1));j--){
//                 str += j+"\t";
//             }
//         }else{
//             for(let j = n*(i-1)+1;j<=(n*i);j++){
//                 str += j+"\t";
//             }
//         }
// 		str = str + "\n";
// 	}
// 	return str;
// }

// // ********************************************>>> pattern 6 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {

// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
//         for(let j =1;j<=n;j++){
// 			if(j==Math.ceil(n/2)){
// 				str += i+"\t";
// 			}else if(i==Math.ceil(n/2)){
// 				str += j+"\t";
// 			}else{
// 				str += "\t";
// 			}
// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// // ********************************************>>> pattern 6 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= n; j++) {

// 			if (i > Math.ceil(n / 2)) {

// 				if (j < Math.ceil(n / 2)){
// 					str += i + "\t";
// 				}else{
// 					str += n - i + 1 + "\t";
// 				}

// 			}else if (i == Math.ceil(n / 2)) {

// 				if (j <= Math.ceil(n / 2)){
// 					str += j + "\t";
// 				}else{
// 					str += n - j + 1 + "\t";
// 				}
// 			} else {
// 				str += "\t";
// 			}
// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// ********************************************>>> pattern 6 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= n; j++) {

// 			if (i > Math.ceil(n / 2)) {

// 				if (j < Math.ceil(n / 2)){
// 					str += i + "\t";
// 				}else{
// 					str += n - i + 1 + "\t";
// 				}

// 			}else if (i == Math.ceil(n / 2)) {

// 				if (j <= Math.ceil(n / 2)){
// 					str += j + "\t";
// 				}else{
// 					str += n - j + 1 + "\t";
// 				}
// 			} else {
// 				str += "\t";
// 			}
// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }

// ********************************************>>> pattern 6 <<<*********************************************

// let n=5;
// let str="";
// for(let i=1;i<=n;i++){
// 	for(let j=1;j<=n;j++){
// 		if(i==1){
// 			str+=j+"\t";
// 		}
// 		else if(j==1){
// 			str+=i+"\t";
// 		}
// 		else if(j==n){
// 			str+=j+1-i +"\t";
// 		}
// 		else if(i==n){
// 			str+=i+1- j +"\t";
// 		}
// 		else{
// 			str+="\t";
// 		}
// 	}str+="\n";
// }console.log(str);

// ********************************************>>> pattern 7 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= i; j++) {
// 			str = str + "x\t";

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }

// ********************************************>>> pattern 8 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= i; j++) {
// 			str = str + i+"\t";

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// // ********************************************>>> pattern 9 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= i; j++) {
// 			str = str + j+"\t";

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }

// // ********************************************>>> pattern 9 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= i; j++) {
// 			str = str + j+"\t";

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// // ********************************************>>> pattern 10 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = i; j >= 1; j--) {
// 			str = str + j+"\t";

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }

// // ********************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= i; j++) {
// 			str = str + (n-j+1+"\t");

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }

// ********************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		if(i%2!=0){
// 			for (let j = 1; j <= i; j++) {
// 				str = str + j+"\t";
// 			}

// 		}else{
// 			for (let j = i; j >= 1; j--) {
// 				str = str + j+"\t";
// 			}
// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }
// // ********************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	let count = 1;

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= i; j++) {
// 			if(count%2==0){
// 				str = str + "*"+"\t";

// 			}else{
// 				str = str +count+  "\t";
// 			}
// 			count++;

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }

// ********************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = n; j >= i; j--) {

// 			str = str + "*"+"\t";

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// ********************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= n-i+1; j++) {
// 			str = str + (n-j+1)+"\t";
// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// // ********************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= n-i+1; j++) {

// 			str = str + j+"\t";

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// // ********************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= n-i+1; j++) {

// 			str = str + i+"\t";

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }

// ********************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		for (let j = i; j <= n; j++) {

// 			str = str + j+"\t";

// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// ********************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		if (i % 2 != 0) {
// 			for (let j = n; j >= i; j--) {
// 				if (j % 2 == 0) {
// 					str = str + "* \t";
// 				} else {
// 					str = str + j + "\t";
// 				}
// 			}
// 		} else {
// 			for (let j = n; j >= i; j--) {
// 				if (j % 2 != 0) {
// 					str = str + "* \t";
// 				} else {
// 					str = str + j + "\t";
// 				}
// 			}
// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=n-i; j++) {
// 			str = str + "\t";

// 		}
// 		//star
// 		for (let j = 1; j <=i; j++) {
// 			str = str + "* \t";

// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }
// // *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=n-i; j++) {
// 			str = str + "\t";

// 		}
// 		//star
// 		for (let j = 1; j <=i; j++) {
// 			str = str + i+"\t";

// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=n-i; j++) {
// 			str = str + "\t";

// 		}
// 		//star
// 		for (let j = 1; j <=i; j++) {
// 			str = str + j+"\t";

// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }
// // *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=n-i; j++) {
// 			str = str + "\t";

// 		}
// 		//star
// 		for (let j = 1; j <=i; j++) {
// 			str = str + (n-i+1)+"\t";

// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }
// // *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=n-i; j++) {
// 			str = str + "\t";

// 		}
// 		//star
// 		for (let j = 1; j <=i; j++) {
// 			str = str + (n-j+1)+"\t";

// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }
// // *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=n-i; j++) {
// 			str = str + "\t";

// 		}
// 		//star
// 		for (let j = 1; j <=i; j++) {
// 			str = str + (n-i+j)+"\t";

// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// // *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=i-1; j++) {
// 			str = str + "\t";

// 		}
// 		//star
// 		for (let j = 1; j <=n-i+1; j++) {
// 			str = str + "* \t";

// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }
// // // *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let count = 0;
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		let count = 0;
// 		for (let j = 1; j <=i; j++) {

// 			if(j==1){
// 				count+=i
// 				str = str + count+"\t";
// 			}else{
// 				count+=(n-j+1)
// 				str = str + count+"\t";
// 			}

// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=n-i; j++) {
// 			str = str + "\t";
// 		}
// 		//star
// 		for (let j = 1; j <=2*i-1; j++) {
// 			str = str + "*\t";

// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }
// // *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let count = 0;
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=n-i; j++) {
// 			str = str + "\t";
// 		}
// 		//star
// 		for (let j = 1; j <=i; j++) {
// 			str = str + j+"\t";

// 		}
// 		//star
// 		for (let j = i-1; j >=1; j--) {
// 			str = str + j+"\t";

// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }
// // *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	let st = 1;
// 	let sp = n-1;

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=sp; j++) {
// 			str = str + "\t";
// 		}
// 		//star
// 		for (let j = 1; j <=st; j++) {
// 			str = str + "*\t";

// 		}
// 		str = str + "\n";

// 		//condition
// 		if(i<n/2){
// 			sp--;
// 			st+=2;

// 		}else{
// 			sp++;
// 			st-=2;

// 		}

// 	}
// 	return str;
// }
// *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	let st = 1;
// 	let sp = n-1;

// 	for (let i = 1; i <= n; i++) {
// 		//space
// 		for (let j = 1; j <=sp; j++) {
// 			str = str + "\t";
// 		}
// 		//star
// 		for (let j = 1; j <=st; j++) {
// 			str = str + "*\t";

// 		}
// 		str = str + "\n";

// 		//condition
// 		if(i<n/2){
// 			sp--;
// 			st+=2;

// 		}else{
// 			sp++;
// 			st-=2;

// 		}

// 	}
// 	return str;
// }

// *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	// let st = 1;
// 	// let sp = ;

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i < n / 2) {
// 			//star
// 			for (let j = 1; j <= i; j++) {
// 				str = str + "*\t";
// 			}
// 		} else {
// 			for (let j = 1; j <= n-i+1; j++) {
// 				str = str + "*\t";
// 			}
// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// // *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	// let st = 1;
// 	// let sp = ;

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i < n / 2) {
// 			//star
// 			for (let j = 1; j <= i; j++) {
// 				str = str + i+"\t";
// 			}
// 		} else {
// 			for (let j = 1; j <= n-i+1; j++) {
// 				str = str + i+"\t";
// 			}
// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// // *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	// let st = 1;
// 	// let sp = ;

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i < n / 2) {
// 			//star
// 			for (let j = 1; j <= i; j++) {
// 				str = str + j+"\t";
// 			}
// 		} else {
// 			for (let j = 1; j <= n-i+1; j++) {
// 				str = str + j+"\t";
// 			}
// 		}
// 		str = str + "\n";
// 	}
// 	return str;
// }
// *******************************************>>> pattern 11 <<<*********************************************
// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	// let st = 1;
// 	// let sp = ;

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i % 2 == 0) {
// 			if (i < n / 2) {
// 				//star
// 				for (let j = i; j >= 1; j--) {
// 					str = str + j + "\t";
// 				}
// 			} else {
// 				for (let j = n - i + 1; j >= 1; j--) {
// 					str = str + j + "\t";
// 				}
// 			}
// 		} else {
// 			if (i < n / 2) {
// 				//star
// 				for (let j = 1; j <= i; j++) {
// 					str = str + j + "\t";
// 				}
// 			} else {
// 				for (let j = 1; j <= n - i + 1; j++) {
// 					str = str + j + "\t";
// 				}
// 			}
// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// // // *******************************************>>> pattern 11 <<<*********************************************

// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	// let st = 1;
// 	let sp = Math.trunc(n / 2);

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i <Math.ceil(n / 2)) {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			if (i % 2 != 0) {
// 				//star
// 				for (let j = 1; j <= i; j++) str = str + j + "\t";
// 			} else {
// 				for (let j = i; j >= 1; j--) str = str + j + "\t";
// 			}
// 			sp--;

// 		} else {
// 			//space
// 			for (let j = 1; j <= sp; j++) {
//                 str = str + "\t";
// 			}

// 			if (i % 2 != 0) {
// 				//star
// 				for (let j = 1; j <= n-i+1; j++) str = str + j + "\t";
// 			} else {
// 				for (let j = n-i+1; j >= 1; j--) str = str + j + "\t";
// 			}
//             sp++;
// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// // // *******************************************>>> pattern 11 <<<*********************************************

// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	// let st = 1;
// 	let sp = Math.trunc(n / 2);

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i <Math.ceil(n / 2)) {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			//star
// 			for (let j = i; j >=1; j--) str = str + j + "\t";
// 			sp--;

// 		} else {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			//star
// 			for (let j = n-i+1; j >=1; j--) str = str + j + "\t";
//             sp++;
// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// // *******************************************>>> pattern 11 <<<*********************************************

// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	// let st = 1;
// 	let sp = Math.trunc(n / 2);

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i <Math.ceil(n / 2)) {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			//star
// 			for (let j = 1; j <=i; j++) str = str + j + "\t";
// 			sp--;

// 		} else {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			//star
// 			for (let j = 1; j <=n-i+1; j++) str = str + j + "\t";
//             sp++;
// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// // // *******************************************>>> pattern 11 <<<*********************************************

// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	// let st = 1;
// 	let sp = Math.trunc(n / 2);

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i <Math.ceil(n / 2)) {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			//star
// 			for (let j = 1; j <=i; j++) str = str + i + "\t";
// 			sp--;

// 		} else {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			//star
// 			for (let j = 1; j <=n-i+1; j++) str = str + i + "\t";
//             sp++;
// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// // // *******************************************>>> pattern 11 <<<*********************************************

// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	// let st = 1;
// 	let sp = Math.trunc(n / 2);

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i <Math.ceil(n / 2)) {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			//star
// 			for (let j = 1; j <=i; j++) str = str + "*\t";
// 			sp--;

// 		} else {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			//star
// 			for (let j = 1; j <=n-i+1; j++) str = str +"*\t";
//             sp++;
// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// // // *******************************************>>> pattern 11 <<<*********************************************

// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	let sp = Math.trunc(n / 2);

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i <Math.ceil(n / 2)) {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			//star
// 			for (let j = 1; j <=i; j++) str = str + "*\t";
// 			sp--;

// 		} else {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";
// 			//star
// 			for (let j = 1; j <=n-i+1; j++) str = str +"*\t";
//             sp++;
// 		}

// 		str = str + "\n";
// 	}
// 	return str;
// }

// // // *******************************************>>> pattern 11 <<<*********************************************

// let n = +prompt("Enter a Number");
// let sp = Math.trunc(n / 2);
// let st = 1;
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n; i++) {
// 		//condition
// 		if (i < Math.ceil(n / 2)) {
// 			//space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";

// 			//star

// 			for (j = 1; j <= st; j++) {
// 				if (j <= Math.ceil(st / 2)) {
// 					str = str + String.fromCharCode(65 + j - 1) + "\t";
// 				} else {
// 					str = str + String.fromCharCode(65 + st - j) + "\t";
// 				}
// 			}

// 			sp--;
// 			st += 2;
// 		}else{
//             //space
// 			for (let j = 1; j <= sp; j++) str = str + "\t";

//             //star

// 			for (j = 1; j <= st; j++) {
// 				if (j <= Math.ceil(st / 2)) {
// 					str = str + String.fromCharCode(65 + j - 1) + "\t";
// 				} else {
// 					str = str + String.fromCharCode(65 + st - j) + "\t";
// 				}
// 			}
//             sp++;
// 			st -= 2;

//         }

// 		str = str + "\n";
// 	}
// 	return str;
// }

// // // *******************************************>>> pattern 11 <<<*********************************************

// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";
// 	let sp = n-1;
//     let st =1;

// 	for (let i = 1; i <= n; i++) {
// 		//star
// 		for (let j = 1; j <= st; j++) str = str + "*\t";
// 		//space
// 		for (let j = 1; j <= sp; j++) str = str + "\t";
// 		//star
// 		for (let j = 1; j <= st; j++) str = str + "*\t";

// 		//condition
// 		if (i < Math.ceil(n / 2)){
//             st++;
//             sp-=2;
//         }
// 		else {
//             sp+=2;
//             st--;
//         }

// 		str = str + "\n";
// 	}
// 	return str;
// }

// // // *******************************************>>> pattern 11 <<<*********************************************

// let n = +prompt("Enter a Number");
// console.log(getPattern(n));
// function getPattern(n) {
// 	let str = "";

// 	for (let i = 1; i <= n * n; i++) {
// 		//condition
// 		str = str + String.fromCharCode(97 + i-1) + "\t";
//         if(i%n == 0) str = str + "\n";
// 	}
// 	return str;
// }

// // // // *******************************************>>> pattern 11 <<<*********************************************

// // let n = +prompt("Enter a Number");
// console.log(getPattern(7));
// function getPattern(n) {
// 	let str = "";
// 	let sp = Math.trunc(n / 2);
// 	let st = 1;

// 	for (let i = 1; i <= n; i++) {
// 		let code = 65;

// 		//space
// 		for (let j = 1; j <= sp; j++) {
// 			str += "\t";
// 		}

// 		//print
// 		for (let j = 1; j <= st; j++) {
// 			if (j < Math.ceil(st / 2)) {
// 				str += String.fromCharCode(code++) + "\t";
// 			} else {
// 				str += String.fromCharCode(code--) + "\t";
// 			}
// 		}
// 		str += "\n";
// 			if (i < n / 2) {
// 				sp--;
// 				st += 2;
// 			} else {
// 				sp++;
// 				st -= 2;
// 			}
// 	}

// 	return str;
// }

// // // // *******************************************>>> pattern 11 <<<*********************************************

// // let n = +prompt("Enter a Number");
// // console.log(getString());
// getString();
// function getString() {
// 	let str = "javascript";
// 	let i =str.length-1;
// 	while(0<=i){
// 		console.log(str[i]);
// 		i--
// 	}

// }

// // // // *******************************************>>> pattern 11 <<<*********************************************

// let n = +prompt("Enter a Number");
// let str = "Jsp@123_";
// getString(str);
// function getString(str) {
// 	let str2 = "";

// 	for(let i =0;i<str.length;i++){
// 		if((str[i]>'A'&&str[i]<'Z')||(str[i]>'a'&&str[i]<'z')||(str[i]>'0'&&str[i]<'9'))str2+=str[i];
// 	}
// 	console.log(str2)
	
// }

// // // // *******************************************>>> pattern 11 <<<*********************************************

let str = "race";
let str2 = "care";
console.log(getString(str,str2));

function getString(str,str2) {
	if(str.length != str2.length )return false;
	let m1 = {};
	let m2 = {};
	for(let i = 0;i<str.length;i++){
		if(m1[str[i]])m1[str[i]]++;
		else m1[str[i]]=1;

		if(m2[str2[i]])m2[str2[i]]++;
		else m2[str2[i]]=1;

	}

	for(let key in m1){
		if(m1[key] != m2[key])return false;
	}
	return true;
	
	
}
