import React from 'react';
import './TextInput.css'
class TextInput extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return <input className="name-input" type="text" placeholder="type name"/>
  }
}

export default TextInput;