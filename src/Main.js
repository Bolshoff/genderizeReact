import React, {useState} from 'react';
import "./Main.css"
import TextInput from './TextInput';
import Button from './Button';
import GenderResponse from './GenderResponse';



function Main(props){
  const [inputValue, setInputValue] = useState('');
  const [gender, setGender] = useState(null);
  const serverUrl = 'https://api.genderize.io';

   function updateData(value){
    setInputValue(value);
  }

 function  getGender(){
    const inputName = inputValue;
    const url = `${serverUrl}?name=${inputName}`
      if(typeof +inputName ==='number') {
        try {
          fetch(url).then((response) => response.json()).then(name => {
            setGender( name.gender);
          })
        }catch(e)
        {
          console.log(e);
        }

      }

  }

  function checkGender(e){
    e.preventDefault();
    getGender();
    e.target.reset();

  }

    return(
        <div className="genderize">
          <GenderResponse  textContent={gender}/>
          <form className="submit-name__form" onSubmit={checkGender}>
            <label>
              <TextInput   updateData={updateData}  />
              <p className="warning-message">{(inputValue.length < 3 && inputValue.length > 0) ? "Too short name" : ""}</p>
            </label>
            <Button type="submit" value="CHECK"/>
          </form>
        </div>
    );
}

export default Main;