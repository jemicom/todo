# hook을 사용하지 않은 방법

```
import React, { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const submitHandle = (event) => event.preventDefault();

  // input 입력이 일어나면 객체로 처리하기
  const idChangeHandle = (event) => {
    //console.log(event.target.value);
    setId(event.target.value);
    console.log(id);
  };
  const pwChangeHandle = (event) => {
    //console.log(event.target.value);
    setPw(event.target.value);
    console.log(pw);
  };

  const loginHandle = () => {
    const user = {
      id,
      pw,
    };

    console.log(user); // 전송처리

    setId("");
    setPw("");
  };

  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        placeholder="아이디"
        onChange={idChangeHandle}
        value={id}
      />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={pwChangeHandle}
        value={pw}
      />
      <input type="submit" value="로그인" onClick={loginHandle} />
    </form>
  );
};

export default Login;
```

# useRef hook을 사용한 dom 접근

```
import React, { useState, useRef, useEffect } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idRef = useRef();
  const pwRef = useRef();
  // const id = document.querySelector("#id");
  console.log(idRef); //{current: undefined}

  useEffect(() => {
    pwRef.current.focus();
  }, []);

  const submitHandle = (event) => event.preventDefault();

  // input 입력이 일어나면 객체로 처리하기
  const idChangeHandle = () => {
    console.log(idRef.current.value);
    setId(idRef.current.value);
  };

  const pwChangeHandle = () => {
    setPw(pwRef.current.value);
  };

  const loginHandle = () => {
    const user = {
      id,
      pw,
    };

    console.log(user); // 전송처리

    // setId("");
    // setPw("");
    idRef.current.value = "";
    pwRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        placeholder="아이디"
        onChange={idChangeHandle}
        value={id}
        ref={idRef}
      />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={pwChangeHandle}
        value={pw}
        ref={pwRef}
      />
      <input type="submit" value="로그인" onClick={loginHandle} />
    </form>
  );
};

export default Login;
```

# useEffect

// javascript 에서 페이지를 읽은 후에 js를 실행하세요.

```
window.onload(()=>{
  처리
})

document.addEventListener("DOMContentLoaded", ()=>{
  처리
})

// body 최하단에 js 를 배치하기

<script defer src="*.js">
<script async src="*.js">
```
