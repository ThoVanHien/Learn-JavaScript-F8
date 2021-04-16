/**
 * 1. Kiểu dử liệu đon giản  ( Primitive data types)
 *      -String
 *          var = 'xin chao' 
 *      -Number 
 *          var = 5
 *      -Boolean 
 *          var a = true;
 *          var x = a < b
 *      -BigInt 
 *      
 *      -Symbol
 *      -undefined
 *          var a ;
 *      -null
 *          var a = null;
 * 2. Kiểu dữ liệu phức tạp (Non-primitive data types)
 *      -Object
 *      -Array // kiểu obj đặc biệt
 *      -Funtion // kiểu obj đặc biệt
 * --------------value types : tham trị--------------------------
 * vd :
 * let a = 1 // tạo ra biến a, cấp một ô nhớ, lưu giá trị 1 vào ô nhớ
 * let b = a // tạo ra biến b, cấp một ô nhớ, lưu giá trị của a vào ô nhớ (1)
 * a = 2 // sửa giá trị trong ô nhớ của a thành 2 
 * console.log(b) ==> b = 1
 * 
 * 
 * ---------------reference types : tham chiếu---------------------------
 * vd1: 
 * let a = {  
 *  name : 'Hien'
 * } // tạo ra biến a, cấp một ô nhớ lưu {name: 'Hien'} vào ô nhớ, trả về địa chỉ đã lưu và gán giá trị biến a
 *  let b = a //tạo biến b, trỏ biến b tới cùng địa chỉ ô nhớ biến a
 * a.name = 'Van Hien' //sửa giá trị của key name trong ô nhớ thành 'Van Hien'
 * console.log(b)//biến b lúc này lưu địa chỉ của biến a , mà biến a thì được cấp 1 ô nhớ mà ô nhớ chứa giá trị key name = 'Van Hien', còn giá trị của a là địa chỉ ô nhớ
 * 
 * vd2:
 * let a = {
 *  name  :'HONDA'
 * }
 * //tạo ra biến a cấp 1 ô nhớ lưu {name : 'HONDA'} vào ô nhớ, trả về địa chỉ đã lưu và gán giá trị biến a
 * a = {
 *  name : 'YAMAHA'
 *  model: 'sirius'
 * }
 * //tương tự tạo ra biến a, nhưng địa chỉ ban đầu ko bị mất
 * vd3:
 * let a = {
    name : 'HONDA'
}
let b = a;
a = {
    name : 'YAMAHA',
    model :'sirius'
}
console.log(b)

    vd4:
    const student{
        name : 'Van Hien',
        profile :{
            firstName : 'Tho'
            lastName : 'Van Hien'
            sex : 'male'
        }
    }
    //đi từ trên xuống thấy profile tạo ra ô nhớ lưu giá trị, và trả về địa chỉ
    //student : lưu địa chỉ của ô nhớ , ô nhớ chứa giá trị name và profile,mà profile chứa địa chỉ của ô nhớ kia
    
 */  

