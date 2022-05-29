import React from 'react';
import "./Main.css"
import TextInput from './TextInput';
import Button from './Button';
import GenderResponse from './GenderResponse';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.checkGender = this.checkGender.bind(this);


  }
  // const serverUrl = 'https://api.genderize.io';
  // let response;

  // async function getGender(){
  //   const firstName = domElements.inputName.value;
  //   const url = `${serverUrl}?name=${firstName}`;
  //
  //
  //   response = fetch(url)
  //   .then(response => name = response.json()  )
  //   .then(name=>{
  //
  //     domElements.outputGender.value = `${firstName} - ${name.gender}`;
  //   })
  // }


   checkGender(e){
    e.preventDefault();
    console.log('gender is checked');


  }
  render() {

    return (
        <div className="genderize">
          <GenderResponse/>
          <form className="submit-name__form" onSubmit={this.checkGender}>
            <label>
              <TextInput />
            </label>
            <Button type="submit" value="CHECK"/>
          </form>
        </div>
    );
  }
}

export default Main;