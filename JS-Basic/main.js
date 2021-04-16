var users = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "XIN CHAO CAC BAN",
  },
  {
    id: 2,
    user_id: 2,
    content: "CHAO BAN NHA",
  },
  {
    id: 3,
    user_id: 3,
    content: "CHAO BAN NHA",
  },
];

//1.Lấy comments
//2.Từ coments lấy ra user-id
//3.từ user_id lấy ra user

//fake api
//vì lấy dữ liệu qua api là hành động xử lý bất đồng bộ
function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUserByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    resolve(result);
  });
}

getComments().then(function (comments) {
  var userIds = comments.map(function (comment) {
    return comment.user_id;
  });
  return getUserByIds(userIds)
    .then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    })
    .then(function (data) {
      console.log(data);
      var commentBlock = document.getElementById("comment-block");
      html = "";
      data.comments.forEach(function (comment) {
        var user = data.users.find(function (user) {
          return comment.user_id === user.id;
        });
        console.log(user)
        html += `<li>${user.name}: ${comment.content}`;
      });
      commentBlock.innerHTML = html;
    });
});
