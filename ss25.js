//bai1
//  nhập vào một số nguyên dương
var numbers = parseInt(prompt("Nhập vào một số nguyên dương:"));
 let sum = 0;
if (isNaN(numbers) || numbers <= 0) {
    console.log(" không hợp lệ. Vui lòng nhập một số nguyên dương.");
} else {
    // In ra các số nguyên dương từ 1 đến số vừa nhập
    for (var i = 1; i <= numbers; i++) {
        console.log(i);
    
    }
   
    for ( var i = 1; i<= numbers; i++){
        sum+=i;
        
    }
}

if(sum%2 !==0){
    console.log(sum);
}else{
    console.log("kết quả chẵn");
}



//bai2

let a = parseInt(prompt("nhập số nguyên dương a"));
let b = parseInt(prompt("nhập số nguyên dương b"));

// if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
//     console.log("Vui lòng nhập hai số nguyên dương!");
//     return;
//   }

let sum2 = 0;
let sum1 = 0;


var smallerNumber = Math.min(a, b);
var largerNumber = Math.max(a, b);

for (var i = smallerNumber + 1; i < largerNumber; i++) {
    if (i % 2 === 0) {
      sum2 += i; // Cộng dồn số chẵn
    } else {
      sum1 += i; // Cộng dồn số lẻ
    }
  }

  // In kết quả ra màn hình console
  console.log("Tổng các số lẻ là: " + sum1);
  console.log("Tổng các số chẵn là: " + sum2);




//bai3
let n = parseInt(prompt("nhập n"));

let summ= 0;
let m = 1;
while(summ + m < n){
    summ+=m;
    m++;
}
console.log(m-1);


//bai4

let numN = parseInt(prompt("nhập n"));

let sumN = 0;
let temp = 0;

// Tính giá trị biểu thức S
for (let i = 1; i <= numN; i++) {
  temp = temp * 10 + i; // Cộng dồn các chữ số
  sumN += temp; // Cộng dồn vào tổng
}

console.log("Giá trị biểu thức S là: " + sumN);





//bai5
let c = parseInt(prompt("nhập số nguyên n"));

for(let i=1; i<c; i++){
    if(i%2 == 0){
        console.log(i);
    }
}



//bai7


    


