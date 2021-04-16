//Tagged template lieterals

function hightlight([first, ...rest], ...value) {
  console.log([first]);
  return value
    .reduce((acc, curr) => [...acc, `<span>${curr}</span>`, rest.shift()], [
      first,
    ])
    .join("");
}
//Lần 1 : ['Học lập trình ','JS','tại']
//Lần 2 : ['Học lập trình;, 'JS', 'tại', 'F8', '!']

var a = ["Học lập trình ", "JS", "tại"];
var b = ["F8", "!"];

var brand = "F8";
var course = "JS";
const html = hightlight`Học lập trình ${course} tại ${brand} !`;

//Mảng con , "JS", "F8"

console.log(html);
console.log([...a, ...b]);
