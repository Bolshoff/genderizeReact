import React from 'react';
import './Button.css';


function Button(props){
      return(

        <input className="submit-button" type={props.type} value={props.value}  />

    );
}

export default Button;