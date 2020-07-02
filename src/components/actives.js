import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Tab,
  ListGroup,
  Alert,
  Card,
  Badge,
} from "react-bootstrap";

const Actives = ({ array }) => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Tareas Por Hacer</h1>
          <p>Lista de Tareas por Hacer</p>
        </Container>
      </Jumbotron>
      <Card>
        <Card.Body>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <ListGroup>
              {array
                .filter((item) => !item.isComplete)
                .map((option) => {
                  return (
                    <Row>
                      <Col sm={4} key={option.key + "-col"}>
                        <ListGroup.Item action href={"#link" + option.key}>
                          {option.value}
                          <Badge variant="success">Activo</Badge>
                        </ListGroup.Item>
                      </Col>
                      <Col sm={8}>
                        <Tab.Content>
                          <Tab.Pane eventKey={"#link" + option.key}>
                            <Alert
                              key={"alert-" + option.key}
                              variant="primary"
                            >
                              {option.comment}
                            </Alert>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  );
                })}
            </ListGroup>
          </Tab.Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Actives;
