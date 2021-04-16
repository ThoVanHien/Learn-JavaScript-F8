var courses = [
  {
    id: 1,
    name: "TOÁN 1",
    price: 8,
  },
  {
    id: 1,
    name: "TOÁN 2",
    price: 10,
  },
  {
    id: 1,
    name: "TOÁN 3",
    price: 8,
  },
  {
    id: 1,
    name: "ANH VĂN",
    price: 0,
  },
];
/*HÀM forEach*/
Array.prototype.forEach2 = function (callback) {
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      callback(this[i], i, this);
    }
  }
};
//Chỉ gọi lại callback và truyền 2 đối số
//value là element : mỗi lần for là 1 element(1số,1 chuỗi,1 đối tượng,1 mảng,1 function)

/*HÀM EVERY */
Array.prototype.every2 = function (callback) {
  var output = true;
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var result = callback(this[i], i, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};
//Hàm trả về true of false

/*Hàm SOME*/
Array.prototype.some2 = function (callback) {
  var output = false;
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      if (callback(this[i], i, this)) {
        return (output = true);
      }
    }
  }
  return output;
};
//Hàm trả về true of false

/*HÀM FILTER */
Array.prototype.filter2 = function (callback) {
  var newArr = [];
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var result = callback(this[i], i, this);
      if (result) {
        newArr.push(this[i]);
      }
    }
  }
  return newArr;
};

//Hàm trả về mảng chứa các element thỏa điều kiện, không thỏa trả về undifined

/*Hàm FIND */
Array.prototype.find2 = function (callback) {
  var output;
  for (var i in this) {
    var result = callback(this[i], i, this);
    if (result) {
      output = this[i];
      break;
    }
  }
  return output;
};

//Hàm trả về 1 element thỏa điều kiện , không có phần tử nào thì undifined

/*Hàm map */
Array.prototype.map2 = function (callback) {
  var newArr = [];
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var result = callback(this[i], i, this);
      newArr.push(result);
    }
  }
  return newArr;
};
//Return cái gì trả mảng chứa cái đó

/*Hàm reduce */
Array.prototype.reduce2 = function (callback, init) {
  for (var i in this){
      if(this.hasOwnProperty(i)){
          init = callback(init, this[i], i, this);
      }
  }
  return init;
};

console.log(
  [1, 2, 3, 4].reduce2(function reducer(total, number) {
    return total + number;
  },0)
);
