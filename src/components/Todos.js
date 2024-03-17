// 스케쥴 작업 처리

import React, { useState } from "react";
import "./Todos.js";
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

const Todos = () => {
  const [todo, setTodo] = useState({});
  // { id : 1, todo :"hello" ; checked : false}

  const [todos, setTodos] = useState(preTodos);
  let num = todos.length;

  const inputHandle = (event) => {
    const input_todo = event.target.value;

    const temp = { id: ++num, todo: "", checked: false };
    temp.todo = input_todo;
    setTodo(temp);
  };

  const submitHandle = (event) => {
    event.preventDefault();
  };

  const addHandle = () => {
    // todos.push(temp);
    // console.log(todos.length);

    setTodos([...todos, todo]);

    // preTodos.push(todo);
    // setTodos(preTodos);
    // { id : 1, todo :"hello" ; checked : false}
    // { id : 1, todo :"hello" ; checked : false}
    setTodo({ ...todo, todo: "" });
  };

  const deleteHandle = (id) => {
    console.log(id);

    const delTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...delTodos]);
  };

  // state todo, map todo  구분해서 작업 해주어야 하고
  const updateHandle = (id) => {
    console.log(id);

    // map todo, state todo
    const delTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, todo: todo.todo };
        //    todos.todo, todo 속성:state todo 입력된값
      }
      return item;
    });

    setTodos([...delTodos]);
  };

  // checkbox와 수정
  // js 구현해보고 react 들여다 보기
  const checkedHandle = (id) => {
    console.log(id);

    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  return (
    <>
      <form onSubmit={submitHandle}>
        <p>할일을 입력하세요.</p>
        <input type="text" id="todo" onChange={inputHandle} value={todo.todo} />
        <input type="button" id="add" value="추가" onClick={addHandle} />
      </form>
      <ul>
        {!todos.length ? (
          <p style={{ color: "red" }}> 목록을 찾을 수 없습니다. </p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.id} {todo.todo}
              <input
                type="checkbox"
                checked={todo.checked}
                id={`checkbox${todo.id}`}
                onClick={() => checkedHandle(todo.id)}
              />
              <label htmlFor={`checkbox${todo.id}`}>
                {todo.checked ? "완료" : "미완료"}
              </label>
              <input
                type="button"
                id="delete"
                value="삭제"
                onClick={() => deleteHandle(todo.id)}
              />
              <input
                type="button"
                id="update"
                value="수정"
                onClick={() => updateHandle(todo.id)}
              />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Todos;

// fragment : 레이아웃이 필요없는 빈태그
// 디자인 요소 필요 없이 전체를 하나로 묶어주는 역활
