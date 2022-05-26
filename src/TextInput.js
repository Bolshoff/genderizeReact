import React from 'react';
import './TextInput.css';
class TextInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value:""};
    this.inputChangeListener = this.inputChangeListener.bind(this);
    this.isFocusedInput = this.isFocusedInput.bind(this);
  }
  inputChangeListener(){
    console.log('Xnj-nj ghjbc[jlbn');
  }
  isFocusedInput(){
    console.log('focus pocus');
  }
  render() {
    return( <input className="name-input"
                   type="text"
                   placeholder="type name"
                   onChange={this.inputChangeListener}
                   onFocus={this.isFocusedInput}
            />);
  }
}

export default TextInput;