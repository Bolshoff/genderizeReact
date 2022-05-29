import React from 'react';
import './TextInput.css';
class TextInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value:""};

    this.inputChangeListener = this.inputChangeListener.bind(this);

  }
  inputChangeListener(event){

    this.setState({value: event.target.value});
    this.props.updateData(this.state.value);
  }

  render() {
    return( <input className="name-input"
                   type="text"
                   placeholder="type name"
                   onChange={this.inputChangeListener}
          />);
  }

}

export default TextInput;
