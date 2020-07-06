console.log("Print all number b/w -10 and 19");
var count = -10;
while (count < 20) {
  console.log(count);
  count++;
}
console.log("Print all even numbers b/w 10 and 40");
count = 10;
while (count <= 40) {
  console.log(count); // or use (count%2 === 0) count++;
  count += 2;
}
console.log("Print all odd numbers b/w 300 and 333");
count = 300;
while (count <= 333) {
  if (count % 2 !== 0) {
    console.log(count);
  }
  count++;
}
console.log("Print all numbers divisible by 5 AND 3 b/w 5 and 50");
count = 5;
while (count <= 50) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log(count);
  }
  count++;
}
