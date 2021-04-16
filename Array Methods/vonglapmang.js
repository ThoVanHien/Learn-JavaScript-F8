var courses = ["JS", "PHP", "NodeJS", "PHP", 1, 2, 3];
Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

Array.prototype.every2 = function (callback) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};
Array.prototype.some2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) {
        return true;
      }
    }
  }
  return false;
};

Array.prototype.find2 = function (callback) {
  var ouput = undefined;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        ouput = this[index];
        break;
      }
    }
  }
  return ouput;
};

Array.prototype.filter2 = function (callback) {
  var ouput = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        ouput.push(this[index]);
      }
    }
  }
  return ouput;
};

Array.prototype.map2 = function (callback) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      output.push(result);
    }
  }
  return output;
};

Array.prototype.reduce2 = function (callback, init) {
  let i = 0;
  if(arguments.length < 2){
    init = this[0];
    i = 1;
  }
  for(;i < this.length; i++ ){
    init = callback(init, this[i], i, this)
  }
  return init;
  
};
//EX 1: làm phẳng mảng
var depthArray = [1, 2, [3, 4], 5, [6, 7, 8]];
depthArray.length = 100;
var flatArray = depthArray.reduce(function (flatOupt, depthItem) {
  return flatOupt.concat(depthItem);
}, []);

console.log(flatArray);

//EX: Lấy ra các khóa học đưa vào mảng mới
var toppics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "Html, CSS",
      },
      {
        id: 2,
        title: "JS",
      },
    ],
  },
  {
    toppic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "SpringBoot",
      },
    ],
  },
];

var newCourses = toppics.reduce2(
  (course, topic) => course.concat(topic.courses),
  []
);
console.log(newCourses);

var htmls = newCourses.map((course, index) => {
  return `<h1>${course.title}</h1>`;
}).join(`\n`);
console.log(htmls);
