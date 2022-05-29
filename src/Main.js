import React from 'react';
import "./Main.css"
import TextInput from './TextInput';
import Button from './Button';
import GenderResponse from './GenderResponse';


class Main extends React.Component{
  constructor(props) {
    super(props);
    this.checkGender = this.checkGender.bind(this)
    this.state = {value : '', gender:''}
    this.updateData = this.updateData.bind(this);
    this.getGender = this.getGender.bind(this);
    this.serverUrl = 'https://api.genderize.io';

  }

  updateData(value){
    this.setState({value: value});
  }

   getGender(){
    const url = `${this.serverUrl}?name=${this.state.value}`;
    fetch(url)
    .then((response)=> response.json() )
    .then(name=>{
        this.setState({gender:name.gender})

  })

  }

  checkGender(e){
    e.preventDefault();
    this.getGender();
    console.log('gender is checked');
    e.target.reset();

  }

  render() {
    return(
        <div className="genderize">
          <GenderResponse  textContent={this.state.gender}/>
          <form className="submit-name__form" onSubmit={this.checkGender}>
            <label>
              <TextInput   updateData={this.updateData} />
            </label>
            <Button type="submit" value="CHECK"/>
          </form>
        </div>
    );
  }


}

export default Main;