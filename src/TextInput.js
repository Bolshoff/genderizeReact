import React from 'react';
import './TextInput.css';
class TextInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value:""};

    this.inputChangeListener = this.inputChangeListener.bind(this);

  }
  inputChangeListener(event){
    this.props.updateData(event.target.value);
  }

  render() {
    const name = this.props.name;
    return( <input className="name-input"
                   type="text"
                   placeholder="type name"
                   onChange={this.inputChangeListener}
                   value={name}
          />);
  }

}

export default TextInput;
