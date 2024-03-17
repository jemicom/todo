import React, { useState, useRef, useEffect } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idRef = useRef();
  const pwRef = useRef();
  // const id = document.querySelector("#id");
  console.log(idRef); //{current: undefined}

  // js 모든 페이지를 읽은 후에 실행하는 법
  useEffect(() => {
    pwRef.current.focus();
    const user_id = document.querySelector("#id");
    console.log(user_id);
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
        id="id"
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
