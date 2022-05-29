import React from 'react';
import './Button.css';

class Button extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return(

        <input className="submit-button" type={this.props.type} value={this.props.value}  />

    );
  }
}


export default Button;