//bai1

let a = parseInt(prompt("nhập vào số nguyên dương:"));

// if (isNaN(a) || a <= 0) {
//     console.log("Vui lòng nhập một số nguyên dương!");
//     return;
// }

  // In bình phương các số nguyên dương chẵn từ 1 đến number
  
for (var i = 2; i <= a; i += 2) {
    console.log("Bình phương của số " + i + " là: " + (i * i));
  }


//bai2
let b = parseInt(prompt("nhập số nguyên b"));
let c = parseInt(prompt("nhập số nguyên c"));

 // Xác định số nhỏ hơn và số lớn hơn giữa a và b
 var smallerNumber = Math.min(c, b);
 var largerNumber = Math.max(c, b);

 // Tính tổng các số nguyên trong khoảng giữa hai số a và b
 var sum = 0;
 for (var i = smallerNumber; i <= largerNumber; i++) {
   sum += i;
 }

 // In kết quả ra màn hình console
 console.log("Tổng các số nguyên trong khoảng từ " + smallerNumber + " đến " + largerNumber + " là: " + sum);





 //bai3
 let t = parseInt(prompt("nhập số nguyên t"));
 let d = parseInt(prompt("nhập số nguyên d"));

let nhan = t**d;
console.log(nhan);



//bai6
// Yêu cầu người dùng nhập vào số nguyên dương
var userInput = parseInt(prompt("Nhập vào một số nguyên dương:"));

// Kiểm tra tính hợp lệ của đầu vào
if (isNaN(userInput) || userInput <= 0) {
  console.log("Đầu vào không hợp lệ. Vui lòng nhập một số nguyên dương.");
} else {
  // Chuyển đổi số thành chuỗi để thực hiện việc đảo ngược
  var numberString = userInput.toString();
  
  // Đảo ngược chuỗi
  var reversedString = numberString.split('').reverse().join('');
  
  // Chuyển đổi chuỗi đã đảo ngược thành số nguyên
  var reversedNumber = parseInt(reversedString);
  
  console.log("Số đảo ngược:", reversedNumber);
}



//bai4
// nhập vào số nguyên dương n
var userInput = parseInt(prompt("Nhập vào một số nguyên dương n:"));

//đầu vào
if (isNaN(userInput) || userInput <= 0) {
  console.log("Đầu vào không hợp lệ. Vui lòng nhập một số nguyên dương.");
} else {
  var sum = 0;

  // Tính tổng các phần tử
  for (var i = 1; i <= userInput; i++) {
    sum += 1 / Math.pow(i, 3);
  }

  // Làm tròn kết quả đến 5 chữ số thập phân
  var roundedSum = sum.toFixed(5);

  console.log("Kết quả biểu thức S:", roundedSum);
  
}


