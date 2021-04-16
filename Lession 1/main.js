//Cách đặt tên biến 
var bossName = 'doggy'
var bossAge = 1;
var senName = 'Van Hien'
var senAge = 22;

//Một số hàm built-in 
// 1. alert 
alert(bossName);
// 2. console 
console.log('đây là dòng log ' + bossName);
console.warn('đây là dòng cảnh báo ' + bossAge);
console.error('đây là dòng lỗi ' + senAge);
// 3. confirm
confirm('đây là message có 2 nút cancel và ok');
// 4. prompt 
prompt('đây là message có 1 input và cancel và ok');
// 5. setTimeout : sau 1 dây chạy dòng thông báo trong funtion
setTimeout(function () {
    alert('setTime out test ');
}, 1000);
// 6. setInterval : cứ sau 1 dây chạy 1 lần trong funtion
setInterval(function () {
    console.log('test interval ' + bossAge++);
}, 1000);