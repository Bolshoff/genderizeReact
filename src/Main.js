import "./Main.css"
import TextInput from './TextInput';
import Button from './Button';

function Main(props){
  return(
      <div className="genderize">
        <form className="submit-name__form">
          <label>
            <TextInput />
          </label>
          <Button type="submit" value="Press"/>
        </form>
      </div>
  )
}

export default Main;