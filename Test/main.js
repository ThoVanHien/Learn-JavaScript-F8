const myObj = {
  key1: 1,
  key2: "2",
  key3: [3],
  key4: { key4_1: 4 },
};
const a = { ...myObj.key3 };
console.log(a);
