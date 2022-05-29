import React from 'react';
import './TextInput.css';
class TextInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value:""};
    this.inputChangeListener = this.inputChangeListener.bind(this);

  }
  inputChangeListener(e){
    this.setState({value: e.target.value});
    console.log(this.state.value);
  }

  render() {
    const inputName = this.props.value;
    return( <input className="name-input"
                   value={this.state.value}
                   type="text"
                   placeholder="type name"
                   onChange={this.inputChangeListener}

            />);
  }
}

export default TextInput;