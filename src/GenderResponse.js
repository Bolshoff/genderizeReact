import './GenderResponse.css';

    function GenderResponse(props){


  return(
      <div className="gender-response">
        Gender is:
        <span className="gender-response-out" >{props.textContent} </span>
      </div>
  );
}

export default GenderResponse;