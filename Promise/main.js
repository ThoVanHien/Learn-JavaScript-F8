var users = [
  {
    id: 1,
    name: "Lê Bá Thiện",
  },
  {
    id: 2,
    name: "Sơn Đặng",
  },
  {
    id: 3,
    name: "Hưng Trần",
  },
  {
    id: 4,
    name: "Kiên Nguyễn",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Chưa ra bài mới à anh :)?",
  },
  {
    id: 2,
    user_id: 2,
    content: "Vừa mới ra xong :D",
  },
  {
    id: 2,
    user_id: 1,
    content: "Cảm ơn anh nhiều (^_^)",
  },
];
var avatars = [
  {
    id: 1,
    user_id: 1,
    link: "google.com.vn",
  },
  {
    id: 2,
    user_id: 4,
    link: "f8.edu.vn",
  },
  {
    id: 3,
    user_id: 3,
    link: "fullstack.edu.vn",
  },
  {
    id: 4,
    user_id: 2,
    link: "fullstack.dev",
  },
];

function getUserById(userIds) {
  return new Promise((resolve) => {
    let result = users.filter((user) => {
      return userIds.includes(user.id);
    });
    resolve(result);
  });
}

function getAvatarsByIds(userIds) {
  return new Promise((resolve) => {
    let result = avatars.filter((avata) => {
      return userIds.includes(avata.user_id);
    });
    resolve(result);
  });
}
function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(comments);
    }, 1000);
  });
}
getComments()
  .then((comments) => {
    let userIds = comments.map((comment) => {
      return comment.user_id;
    });
    let getUsers = getUserById(userIds).then((users) => {
      return users;
    });
    let getAvatars = getAvatarsByIds(userIds).then((avata) => {
      return avata;
    });
    return Promise.all([getUsers, getAvatars, comments]);
  })
  .then((data) => {
    console.log(data);
  });