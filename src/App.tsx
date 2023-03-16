import React from "react";
import Container from 'react-bootstrap/esm/Container';
import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/esm/Row';
import UsersList from "./components/UsersList";

const App = () => {
  const page = 1;
  return (
    <Container>
      <Row>
        <Col className='col-12'>
          <UsersList page={page}/>
        </Col>
      </Row>
      <Row>
        <Col className='col-12'>
          {/* <Pagination size="lg">{items}</Pagination> */}
        </Col>
      </Row>
    </Container>
  );
};

export default App;