import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap"

export default class UserForm extends Component {
  render() {
    return (
      <div className="userform">
        <Form>
          <Form.Control type="email" name="name" id="name" placeholder="Email or username"></Form.Control>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control
            type="password"
            name="password"
            id="password"
            placeholder="p@$$w0rd"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          ></Form.Control>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
