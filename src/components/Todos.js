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
  Form,
} from "react-bootstrap";

const Todos = ({ array, completed }) => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Todas las Tareas</h1>
          <p>Activas e Inactivas</p>
        </Container>
      </Jumbotron>
      <Card>
        <Card.Body>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <ListGroup>
              {array.map((option, index) => {
                return (
                  <Row>
                    <Col sm={4} key={option.key + "-col"}>
                      <ListGroup.Item action href={"#link" + option.key}>
                          {option.value}
                          {!option.isComplete ? (
                            // <Badge variant="success"> Activo</Badge>
                            <Form.Check
                              id={"custom-switch-" + index}
                              label="Completada"
                              onChange={(event) => completed(event, option, index)}
                            />
                          ) : (
                            <Badge variant="warning"> Finalizado</Badge>
                          )}

                      </ListGroup.Item>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey={"#link" + option.key}>
                          <Alert key={"alert-" + option.key} variant="primary">
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

export default Todos;
