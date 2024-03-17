import logo from "./logo.svg";
import "./App.css";
import Aside from "./components/Aside";
import Popup from "./components/Popup";
import Login from "./components/Login";
import Todos from "./components/Todos";

// direction : right, left
function App() {
  // 정해진 데이터를 fetch 작업으로 읽어와서 처리할 것임
  const title = "라이브 보기";
  const body = "최실장 송서이가 소개가흔 24 트렌드를 만나보세요.";

  return (
    <div>
      {/* <Aside direction={"left"} /> */}
      {/* <Popup title={title} body={body} /> */}
      {/* <Login /> */}
      <Todos />
    </div>
  );
}

export default App;
