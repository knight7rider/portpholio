"use strict";
let a, b, c, n;
a = "HELLO WORLD!";
b = 2;
c = 34;
n = 1;
document.write(a);
document.write(c ** b);
if (a % 2 == 0) {
  document.write("your no. is even");
} else if (a % 2 != 0) {
  document.write("your no. is odd  ");
} else {
  document.write(" thanku");
}
// while (n <= 10) {
//     if (n % 2 != 0) {
//         document.write(n);
//     }
//     n++;
// };
let m = 1;
do {
  if (m % 2 === 0) {
    document.write(m * 2);
  }
  m++;
} while (m < 11);
