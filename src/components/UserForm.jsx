import React, { Component } from "react";

export default class UserForm extends Component {
  render() {
    return (
      <div className="userform">
        <form>
          <input type="text" name="name" id="name"></input>
          <input type="password" name="password" id="password"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
