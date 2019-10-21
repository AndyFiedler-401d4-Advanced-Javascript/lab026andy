import React from 'react';
import './main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    const id = e.target.id;
    this.setState(state => id === 'button1' ? state.counter++ : state.counter--);
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button id = "button1" onClick={this.handleButtonClick}>+1</button>
        <button id = "button2" onClick={this.handleButtonClick}>-1</button>
      </div>
    );
  }
}

  export default Main;