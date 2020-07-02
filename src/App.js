import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
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
  Form,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Todos from "./components/Todos";

import Actives from "./components/actives";
import Inactives from "./components/inactives";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: 0,
      show: false,
      validated: false,
      item: { key: 0, value: "", comment: "" },
      arrayTodos: [
        {
          key: 1,
          value: "Aprender React",
          comment: "Aprender React practicando mucho",
          isComplete: true,
        },
        {
          key: 2,
          value: "Aprender Css",
          comment: "Aprender CSS aprendiendo a rezar y practicando mucho",
          isComplete: false,
        },
      ],
    };
  }

  componentDidMount() {
    let arrayTodos = !!localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [];
    this.setState({
      arrayTodos: arrayTodos,
    });
  }

  handleShow = () =>
    this.setState({
      show: true,
    });

  saveArray = (array) => {
    this.setState(
      {
        show: false,
        arrayTodos: array,
        key: array.length,
        value: "",
        comment: "",
      },
      () => {
        localStorage.setItem("items", JSON.stringify(this.state.arrayTodos));
      }
    );
  };

  handleClose = () => {
    let arrayTodos = this.state.arrayTodos;
    arrayTodos.push({
      key: this.state.key,
      value: this.state.value,
      comment: this.state.comment,
      isComplete: false,
    });
    this.saveArray(arrayTodos);
  };

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({
      validated: true,
    });
  };

  changeInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  changeSwitch = (event, node, index) => {
    let arrayTodos = this.state.arrayTodos;
    arrayTodos[index].isComplete = !node.isComplete;
    this.saveArray(arrayTodos);
  };

  render() {
    return (
      <>
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
              <Todos
                array={this.state.arrayTodos}
                completed={this.changeSwitch}
              />
            </Route>
            <Route path="/actives">
              <Actives array={this.state.arrayTodos} />
            </Route>
            <Route path="/inactives">
              <Inactives array={this.state.arrayTodos} />
            </Route>
          </Switch>
        </Router>
        {/* <Todos array={this.state.arrayTodos} /> */}
        <Button variant="primary" onClick={this.handleShow}>
          Agregar
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tarea nueva</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form
              noValidate
              validated={this.validated}
              onSubmit={this.handleSubmit}
            >
              <p>Agregar tarea</p>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Clave</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  required
                  id="key"
                  type="number"
                  placeholder="Clave"
                  aria-label="Clave"
                  aria-describedby="basic-addon1"
                  value={this.state.key}
                  onChange={(event) => this.changeInput(event)}
                />
                <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Valor</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="value"
                  required
                  placeholder="Valor"
                  aria-label="Valor"
                  aria-describedby="basic-addon2"
                  value={this.state.value}
                  onChange={(event) => this.changeInput(event)}
                />
                <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Comentario
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="comment"
                  required
                  placeholder="Comentario"
                  aria-label="Comentario"
                  aria-describedby="basic-addon3"
                  value={this.state.comment}
                  onChange={(event) => this.changeInput(event)}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Crear
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
