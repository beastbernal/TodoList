import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Todos from "./components/Todos"

// import Actives from "./components/actives"
// import Inactives from "./components/inactives"

// export const getTodosState = store => store.todos;
import {
    Button,
    Container,
    Row,
    Col,
    Tab,
    ListGroup,
    Alert,
    Nav,
    Modal,
    InputGroup,
    FormControl,
    Badge,
  } from "react-bootstrap";

function Header() {
  return (
    <Router>
      <Nav variant="tabs" fill defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="1" href="/home">
            Todos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" href="/actives">
            Activos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" href="/inactives">
            Finalizados
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Switch>
        <Route path="/home">
          {/* <Todos array={this.state.arrayTodos} /> */}
        </Route>
        <Route path="/actives">
          {/* <Actives array={this.state.arrayTodos} /> */}
        </Route>
        <Route path="/inactives">
          {/* <Inactives array={this.state.arrayTodos} /> */}
        </Route>
      </Switch>
    </Router>
  );
}
export default Header;
