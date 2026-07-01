import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

//1. 좌측 연락처 등록 폼 , 우측 연락처 리스트 및 search 폼.
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇개 있는지 보인다.
//4. 사용자가 유저를 이름 검색으로 찾을 수 있다.

function App() {
  return (
    <Container>
      <h1 className="title">Contact</h1>
      <Row>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
