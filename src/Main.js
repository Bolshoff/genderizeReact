import "./Main.css"
import TextInput from './TextInput';
import Button from './Button';

function Main(props){

  function chekGender(e){
    e.preventDefault();
    console.log('gender is checked');
    e.target.reset();

  }
  return(
      <div className="genderize">
        <form className="submit-name__form" onSubmit={chekGender}>
          <label>
            <TextInput value="" />
          </label>
          <Button type="submit" value="CHECK"/>
        </form>
      </div>
  )
}

export default Main;