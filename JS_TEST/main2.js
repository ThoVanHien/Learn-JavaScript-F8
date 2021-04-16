var courses= [
    {
        id : 1,
        name : 'TOÁN 1',
        price: 8,
    },
    {
        id : 1,
        name : 'TOÁN 2',
        price: 10,
    },
    {
        id : 1,
        name : 'TOÁN 3',
        price: 8,
    },
    {
        id : 1,
        name : 'ANH VĂN',
        price: 6,
    },
];
//console.log(toppics)
//forEach : không trả về.
Array.prototype.forEach2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index],index,this)
        }
    }
}

Array.prototype.every2 = function (callback){
    var isFalse = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            isFalse = callback(this[index],index,this)
            if(isFalse === false){
                return isFalse
            }
        }
    }
    if(isFalse){
        return isFalse;
    }
}

var result = courses.every2(function(value,index,originArray){
    return value.id < 0
})
var result2 = courses.every(function(value,index,originArray){
    return value.id < 0
})
console.log(result)
console.log(result2)