# state 사용을 위한 Aside

```Aside.js
import React, { useState } from "react";
import "./Aside.css";

const Aside = () => {
  const [show, setShow] = useState(false);

  const asideOpenHandle = () => {
    setShow(!show);
    // console.log(show);
  };
  return (
    // <aside style={{ right: show ? 0 : "-400px" }}>
    // <aside style={{ transform: `translateX(${show ? 0 : "-400px"})` }}>
    <aside className={show ? "active" : ""}>
      <div className="aside_body">내용</div>
      <button onClick={asideOpenHandle}>이벤트</button>
    </aside>
  );
};

export default Aside;
```

```
aside {
  position: fixed;
  right: -400px;
  width: 400px;
  height: 100vh;
  background-color: skyblue;

  transition: 0.4s;
  transform: translateX(0);
}

aside.active {
  transform: translateX(-400px);
}

aside button {
  background-color: rgb(0, 115, 128);
  color: white;
  transform: translateX(-100%);
  border: none;
  padding: 10px;
}
```

# 방향을 지정할 수 있는 aside

props 이용해서 방향을 전달한다.

```App.js
import Aside from "./components/Aside";

// direction : right, left
function App() {
  return (
    <div>
      <Aside direction={"left"} />
    </div>
  );
}

export default App;
```

```Aside.js
import React, { useState } from "react";
import "./Aside.css";

const Aside = ({ direction }) => {
  const [show, setShow] = useState(false);

  const asideOpenHandle = () => {
    setShow(!show);
    // console.log(show);
  };
  return (
    // <aside className={show ? "active" : ""}>
    // <aside className={direction}>
    <aside className={show ? `${direction} active` : direction}>
      <div className="aside_body">내용</div>
      <button onClick={asideOpenHandle}>이벤트</button>
    </aside>
  );
};

export default Aside;
```

```Aside.css

aside {
  position: fixed;
  width: 400px;
  height: 100vh;
  background-color: skyblue;

  transition: 0.4s;
  transform: translateX(0);
}

aside.right {
  right: -400px;
}
aside.left {
  left: -400px;
}

aside.right.active {
  transform: translateX(-400px);
}
aside.left.active {
  transform: translateX(400px);
}

aside button {
  background-color: rgb(0, 115, 128);
  color: white;
  border: none;
  padding: 10px;
}
aside.right button {
  transform: translateX(-100%);
}
aside.left button {
  transform: translateX(400px);
}
```

# top, bottom 방향을 추가하세요.
