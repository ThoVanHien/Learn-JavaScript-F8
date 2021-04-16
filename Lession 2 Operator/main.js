/*
    Toán tử số học - Arithmetic

    Toán tử	Chức năng	        Ví dụ
        +	Phép cộng	        2 + 2 = 4
        -	Phép trừ	        10 - 4 = 6
        *	Phép nhân	        5 * 2 = 10
        /	Phép chia	        8 / 2 = 4
        **	Phép lũy thừa	    3 ** 2 = 9
        %	Phép chia lấy dư	10 % 3 = 1
        ++	Tăng lên 1      	var a = 2; a++; a = 3
        –	Giảm xuống 1	    var a = 2; a–; a = 1

        Toán tử prelix & posflix
        ++a và a++
        tiền tố thì bình thường ; hậu tố thì gán copy 
        ví dụ 
        var a = 6;
        var output = ++a * 2 - number-- *2
        7 * 2 - 7 * 2 
        Nhưng a lúc này bằng 6


    Toán tử gán    - Assignment
    Toán tử ss     - Comparison
    var a = 5;
    var b = 6;
    if(a==b){
        alert('đúng')
    }
    VD : 
        var a = '1';
        var b = 1;
        console.log(a == b) thì kết quả là đúng do n chỉ so sánh value 
        console.log(a===b) thì kết quả là sai do nó còn so sánh kiểu dữ liệu



    Toán tử logic  - Logical
    if(a > b && a > 0){
        alert('đúng')
    }


    chú ý :
    1. Khi sử dụng toán tử trừ (-) thì Javascript ưu tiên ép kiểu về dạng number rồi thực hiện phép trừ nhé. VD: '15' - 5 thì chuyển rồi '15' thành 15, suy ra 15 - 5 = 10.

    2. Với toán tử cộng (+) thì nếu có 1 vế không phải số thì JS sẽ chuyển 2 vế sang kiểu chuỗi và thực hiện nối chuỗi.
*/
