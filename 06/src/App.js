import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { useState, useEffect } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체 상품 페이지 / login 페이지 / 상품 상세 페이지 제작 예정 ---done
// 1-1. navbar 만들기 >> 각 component에 만들게 되면 중복이 다수 발생. 따라서, 공통내용은 routes 밖에서 작성! ---done
// 2. 전체 상품 페이지 에서는 전체 상품을 볼 수 있다 ---done
// 3. login버튼을 누르면, login 페이지가 나온다 ---done
// 4. 상품 디테일을 눌렀으나, login이 안되어 있을 경우, login 페이지가 나온다. ---done
// 5. login을 한 상테에서는 상품 디테일 페이지를 볼 수 있다.
// 6. logout버튼을 누르면 로그아웃 된다
// 6. 상품 디테일 페이지에서 logout버튼을 누르면 로그아웃 되어 상품 디테일 페이지를 볼 수 없으며, 다시 login 창이 보인다.
// 7. login 상테에서는 logout 버튼이, logout 상태에선 login 버튼이 보인다.
// 8. 상품을 검색 할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("authenticate is ", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
