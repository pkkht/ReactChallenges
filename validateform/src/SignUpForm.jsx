import React, {useState} from 'react';
import styled from 'styled-components';


const SignUpForm = () => {

  const [person, setPerson] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
  });

  const [errors, setErrors] = useState(()=> new Map());
  
  const handleSubmit = (e) => {
    errors.clear();
    e.preventDefault();
    setErrors(()=>new Map(validatePerson()));

    errors.size === 0 && console.log('Form submitted successfully');
  };

  const validatePerson = () => {
    if (person.firstName.trim().length === 0){
        errors.set('firstNameError','First name cannot be empty');
    }
    if (person.lastName.trim().length === 0){
      errors.set('lastNameError','Last name cannot be empty');
    }
    if (person.email.trim().match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/) === null){
      errors.set('emailError','Invalid email address');
    }
    if (person.password.length < 8){
      errors.set('passwordError','Password must be greater than 7 characters');
    }
    if (person.password !== person.confirmPassword){
      errors.set('confirmPasswordError','Passwords do not match');
    }
    console.log(errors);
    return errors;
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={person.firstName}
          onChange={e => {setPerson({...person, firstName: e.target.value})}}
        />
        <p data-testid="first-name-error-id" className="error">{errors.has('firstNameError') && errors.get('firstNameError')}</p>
        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={person.lastName}
          onChange={e=> {setPerson({...person, lastName: e.target.value})}}
        />
        <p data-testid="last-name-error-id" className="error">{errors.has('lastNameError') && errors.get('lastNameError')}</p>
        <input
          data-testid="email-id"
          type="email"
          name="email"
          placeholder="Email Address"
          value={person.email}
          onChange={e => {setPerson({...person, email: e.target.value})}}
        />
        <p data-testid="email-error-id" className="error">{errors.has('emailError') && errors.get('emailError')}</p>
        <input
          data-testid="password-id"
          type="password"
          name="password"
          placeholder="Password"
          value={person.password}
          onChange={e => {setPerson({...person, password: e.target.value})}}
        />
        <p data-testid="password-error-id" className="error">{errors.has('passwordError') && errors.get('passwordError')}</p>
        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={person.confirmPassword}
          onChange={e => {setPerson({...person, confirmPassword: e.target.value})}}
        />
        <p data-testid="confirm-password-error-id" className="error">{errors.has('confirmPasswordError') && errors.get('confirmPasswordError')}</p>
        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px)
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;