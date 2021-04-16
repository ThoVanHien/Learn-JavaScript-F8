[
  { name: "Javascript", coin: 1000 },
  { name: "PHP", coin: 1200 },
  { name: "Dart", coin: 1400 },
  { name: "Ruby", coin: 1600 },
  { name: "ReactJS", coin: 1600 },
  { name: "React-Native", coin: 1800 },
];

var aHeading = document.links;
console.log(aHeading);
for (var i = 0; i < aHeading.length; ++i) {
  aHeading[i].onclick = function (e) {
    // if (!e.target.href.startsWith("https://google.com")) {
    //   e.preventDefault();
    // }
  };
}
