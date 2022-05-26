import './GenderResponse.css';

function GenderResponse(props){
  const serverUrl = 'https://api.genderize.io';
  let response;

  return(
      <div className="gender-response">
        Gender is:
        <span className="gender-response-out"> Some gender</span>
      </div>
  );
}

export default GenderResponse;