import * as PasswordValidator from 'password-validator';
import * as EmailValidator from 'email-validator';

const passwordValidationMap = {
    min: 'Minimum length 8',
    max: 'Maximum length 100',
    uppercase: 'Must have uppercase letters',
    lowercase: 'Must have lowercase letters',
    digits: 'Must have digits',
    spaces: 'Should not have spaces',
    oneOf: 'Should not equal "Passw0rd" or "Password123"'
};

const nameValidationMap = {
    min: 'Minimum length 2',
    max: 'Maximum length 16',
    symbols: 'Should not have symbols',
    digits: 'Should not have digits',
    oneOf: 'Should not equal "name", "firstname" or "lastname"'
};

export const isValidPassword = password => {
    let schema = new PasswordValidator();
    schema
        .is().min(8)                                    // Minimum length 8
        .is().max(100)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits()                                 // Must have digits
        .has().not().spaces()                           // Should not have spaces
        .is().not().oneOf(['Passw0rd', 'Password123']);

    const validateResult = schema.validate(password, {list: true});
    return validateResult.map(errorKey => passwordValidationMap[errorKey])
};

export const isValidEmail = email => {
    return EmailValidator.validate(email)? []: ['Invalid Email'];
};

export const isValidName = name =>{
    let schema = new PasswordValidator();
    schema
        .is().min(2)
        .is().max(16)
        .has().not().digits()
        .has().not().symbols()
        .is().not().oneOf(['name', 'firstname','lastname']);

    const validateResult = schema.validate(name, {list: true});
    return validateResult.map(errorKey => nameValidationMap[errorKey]);
};
