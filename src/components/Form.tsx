import React from "react";

import "./Form.css";

export interface IFormState {
  firstName: string
  lastName: string
}

export class Form extends React.Component<{}, IFormState> {
  state = {
    firstName: "",
    lastName: ""
  };

  onSubmit = (evt: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div className="form-container">
        <h2 className="form-title">
          New Form
        </h2>
        <form className="form" onSubmit={ this.onSubmit }>
          <input
            placeholder="First name"
            name="firstName"
            className="form-control form-input"
            onChange={ evt => this.setState({ firstName: evt.target.value }) }
          />
          <input
            placeholder="Last name"
            name="lastName"
            className="form-control form-input"
            onChange={ evt => this.setState({ lastName: evt.target.value }) }
          />
          <input type="submit" style={{ display: "none" }}/>
        </form>
        <button className="btn btn-primary form-btn" onClick={ this.onSubmit }>
          Save
        </button>
      </div>
    );
  }
}
