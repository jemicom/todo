import React, { useState } from "react";
import "./Aside.css";

const Aside = ({ direction }) => {
  const [show, setShow] = useState(false);

  const asideOpenHandle = () => {
    setShow(!show);
    // console.log(show);
  };
  return (
    // <aside style={{ right: show ? 0 : "-400px" }}>
    // <aside style={{ transform: `translateX(${show ? 0 : "-400px"})` }}>
    // <aside className={show ? "active" : ""}>
    // <aside className={direction}>
    <aside className={show ? `${direction} active` : direction}>
      <div className="aside_body">내용</div>
      <button onClick={asideOpenHandle}>이벤트</button>
    </aside>
  );
};

export default Aside;
