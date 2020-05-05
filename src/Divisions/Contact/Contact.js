import './Contact.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    if (event.target.name =="username") {
      this.setState({username: event.target.value});
    }
    if (event.target.name =="country") {
      this.setState({country: event.target.value});
    }
    if (event.target.name =="comment") {
      this.setState({comment: event.target.value});
    }
  }
  render() {
    return (
      <form>
      <h1> Rate our website: </h1>

      <h1>{this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'

        onChange={this.myChangeHandler}
      />

      <h1>{this.state.country}</h1>
      <p>Enter your country:</p>
      <input
        type='text'
        name='country'
        onChange={this.myChangeHandler}
      />


      <h1>{this.state.comment}</h1>
      <p>What's your question and/or comment:</p>
      <input
        type='text'
        name='comment'
        onChange={this.myChangeHandler}
      />
      <span className="button">
      <button onClick={() => this.handleClick()}>
        Submit
      </button>
      </span>
      </form>
    );
  }
}

export default Contact
