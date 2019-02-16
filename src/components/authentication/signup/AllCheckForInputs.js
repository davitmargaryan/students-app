import * as PasswordValidator from 'password-validator';
import * as EmailValidator from 'email-validator';
import { Component } from 'react';

class AllCheckForInputs extends Component{
    
  static  isValidPassword = password => {
        let schema = new PasswordValidator();
        schema
        .is().min(8)                                    // Minimum length 8
        .is().max(100)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits()                                 // Must have digits
        .has().not().spaces()                           // Should not have spaces
        .is().not().oneOf(['Passw0rd', 'Password123']);
    
        let isValid = schema.validate(password);
        if (!isValid) {alert('please neter correct password')}
        return isValid
  }

  static isValidEmail = email => {
      let isValid = EmailValidator.validate(email);
      if (!isValid) {alert('please enter correct email')}
        return isValid
  }

  static  isValidName = name =>{
    let schema = new PasswordValidator();
    schema
    .is().min(2)                                  
    .is().max(16)                                  
    .has().not().digits()                                
    .has().not().symbols()                     
    .is().not().oneOf(['name', 'firstname','lastname']);

    let isValid = schema.validate(name);
    if (!isValid) {alert('please neter correct name and surname')}
    return isValid
  }

}
export default AllCheckForInputs; 