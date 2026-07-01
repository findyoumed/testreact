import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './component/Navbar'
import Homepage from './page/Homepage'
import Login from './page/Login'
import PrivateRoute from './route/PrivateRoute'

function App() {
// 1. 모든 페이지는 로딩 시 로딩 스피너가 가운데에서 뜬다.
// 2. 유저는 메인페이지에서 도서목록들을 볼 수 있다.
// 3. 유저는 메인페이지에서 도서 검색을 할 수 있다.
// 4. 검색한 도서 결과가 없으면 도서 결과 없음 메세지를 볼 수 있다.
// 5. 도서에 사진이 없으면 엑박 대신에 기본 이미지가 나와야한다.
// 6. 유저는 상단에 메뉴바 (사이트 로고, 메인, 나의 책, 로그인)를 볼 수 있다.
// 7. 유저는 로그인 버튼을 누르면 페이지로 넘어간다.
// 8. 아이디 비밀번호를 입력하면 로그인이 된다.(바로 store에 저장)
// 9. 로그인 후 00님 환영합니다 메세지를 메인페이지에서 볼 수 있다.
// 10 로그인후 이전에 있었던 페이지로 돌아간다.
// ( 나의 책 페이지에서 로그인 페이지로 들어가면 로그인 후에는 나의책 페이지로 돌아가야함) 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mybook" element={<PrivateRoute />} />
      </Routes>
    </>
  )
}

export default App
