//EX 1 :
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
var flatCourses = courses.reduce(function(newCourse,valueCurrent){
    return newCourse+=valueCurrent.price
},0)
console.log(flatCourses)

//----------------------------------------***-----------------------------------//
//Ex2:
var deepArray = [1,2,[3,4],5,[6,7,8,9]];

var flatArray = deepArray.reduce(function(number,value){
    return number.concat(value)
},[])
console.log(flatArray)
//----------------------------------------***-----------------------------------//
//Ex3:
var toppics = [
    {
        toppic : 'KHTN',
        subjects:
        [
            {
                id : '1',
                title : 'TOÁN' 
            },
            {
                id : '2',
                title : 'Lý'
            }
        ]
    },
    {
        toppic:'KHXH',
        subjects: [
            {
                id : '3',
                title : 'GDCD' 
            },
            {
                id : '2',
                title : 'NGỮ VĂN'
            }
        ]
    }
]



var flatToppics = toppics.reduce(function (init,currentValue,currentIndex,originObject){
    return init.concat(currentValue.subjects)
},[])
//Ex truy xuất mảng -> object -> mảng
console.log(toppics[0].subjects[1].id)

var myArray = ['js','php','nodejs']
var issdad= myArray.map(function(course){
    return console.log(course);
})
console.log(myArray)