import "./Main.css"
import TextInput from './TextInput';
import Button from './Button';
import GenderResponse from './GenderResponse';

function Main(props){

  function checkGender(e){
    e.preventDefault();
    console.log('gender is checked');
    e.target.reset();

  }
  return(
      <div className="genderize">
        <GenderResponse />
        <form className="submit-name__form" onSubmit={checkGender}>
          <label>
            <TextInput value="" />
          </label>
          <Button type="submit" value="CHECK"/>
        </form>
      </div>
  )
}

export default Main;