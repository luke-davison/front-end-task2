import React from "react";
import "./Form.css";

export class Form extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };

  onSubmit() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>New Form</div>
        <form className="form clearfix">
          <input
            placeholder="First name"
            name="firstName"
            className="form-control form-input"
            onChange={evt => {
              this.setState({ firstName: evt.target.value });
            }}
          />
          <input
            placeholder="Last name"
            name="lastName"
            className="form-control form-input"
            onChange={evt => {
              this.setState({ lastName: evt.target.value });
            }}
          />
        </form>
        <button
          type="button"
          className="btn btn-primary form-btn"
          onClick={this.onSubmit}
        >
          Save
        </button>
      </div>
    );
  }
}
