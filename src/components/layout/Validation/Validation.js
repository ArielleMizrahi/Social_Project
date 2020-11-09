import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import validator from 'validator';

function isValidIsraeliID(id) {
  var id = String(id).trim();
  if (id.length > 9 || id.length < 5 || isNaN(id)) return false;
  return true;
}
  export class Validation extends Component {
  
    handleInputID = e => {
      this.inputId = e.target.value;
    }
    handleInputPassword = e => {
      this.inputPassword = e.target.value;
    }
    handleInputEmail = e => {
      this.inputEmail = e.target.value;
    }

    isValidId(inputId){
      
      let isValid = false;
      let message = '';
      if (inputId == "" || inputId == null) {
        message = 'ת"ז ריקה, אנא מלא 9 ספרות חוקיות';
      }
      else if (!/^[0-9]+$/.test(inputId)) 
      {
        message = 'ת"ז לא יכולה להכיל תווים, רק מספרים';
      }
      else if (!validator.isLength(inputId, { min: 9 })) 
      {
        message = 'ת"ז מכילה לפחות 9 ספרות';
      }
      else if (isValidIsraeliID(inputId) != false)
      {
        isValid = true;
      }
      else  
      {
        message = 'ת"ז לא תקינה';
      }
      return [isValid, message];

    }

    isValidPassword(inputPassword) {
      let isValid = false;
      let message = '';
      var regularExpression = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&])$";
      
      if (inputPassword == "" || inputPassword == null) {
        message ='סיסמתך לא יכולה להיות ריקה';
      } 
      else if (!validator.isLength(inputPassword, { min: 6 })) 
      {
        message ='סיסמתך חייבת להיות לפחות 6 תווים';
      }
      else if (inputPassword.match(regularExpression)) 
      {
        message ='סיסמתך חייבת להכיל לפחות אות אחת גדולה, אות אחת קטנה ותו מיוחד';
        }
      else
      {
      isValid = true;
      }
      return [isValid, message];
    }

    isValidEmail(inputEmail) {
      let isValid = false;
      let message = '';
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.inputEmail)){
      message= "כתובת מייל תקינה";
      }
      else {
          message="כתובת מייל לא תקינה, נא הזן שנית";
       }
      return [isValid, message];
  }

}
export default Validation;