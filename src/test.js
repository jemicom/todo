const textTodos = ["html", "css", "js"];
textTodos.push("nodejs");
console.log(textTodos);
const newTodos = [...textTodos, "reactjs"];
console.log(newTodos);

const users = { id: 1, name: "hong", age: 30 };
users.addr = "마포";
console.log(users);

const newUsers = { ...users, phone: "010" };
console.log(newUsers);

const preTodos = [
  {
    id: 1,
    todo: "html",
    checked: true,
  },
  {
    id: 2,
    todo: "css",
    checked: false,
  },
];

const newObj = { id: preTodos.length + 1, todo: "", checked: false };
preTodos.push({ id: 3, todo: "js", checked: false });
preTodos.push({ ...newObj, id: newObj.id + 1, todo: "nodejs" });
console.log(preTodos);
