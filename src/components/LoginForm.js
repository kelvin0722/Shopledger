import React from 'react';
import { Button,  Form } from 'semantic-ui-react';
import FormErrors from './FormErrors';
//import FormErrors from './FormErrors';
//statefull login component
 class LoginForm extends React.Component {
   constructor(props){
     super(props);
     this.state ={
       username:'',
       password:'',
       formErrors:{username:'',password:''},
       usernameValid:false,
       passwordValid:false,
       formValid:false
     }
   }

handleUserInput(e){
  const name = e.target.name;
  const value = e.target.value;

   this.setState(
     { [name]:value},
     ()=>this.validateField(name,value)
     );
}

validateField(fieldName,value){
  let fielValidationErrors = this.state.formErrors;
  let usernameValid = this.state.usernameValid;
  let passwordValid = this.state.passwordValid;
  let validusernameRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

  switch(fieldName){
    case 'username':
    usernameValid = value.match(validusernameRegex);
    fielValidationErrors.username = usernameValid ? '':'is invalid'
    console.log(fielValidationErrors.username);
    break;

    case 'password':
    passwordValid = value.length >= 6;
    fielValidationErrors.password = passwordValid ? '':'password too short';
    console.log(fielValidationErrors.password);
    break;

    default:
    break;
  }

  this.setState({
    formErrors:fielValidationErrors,
    usernameValid:usernameValid,
    passwordValid:passwordValid
  },()=> this.validateForm);

}

validateForm(){
  this.setState({
    formValid:this.state.usernameValid && this.state.passwordValid
  });

}
  render(){
  return(
  <Form>
  <FormErrors formErrors={this.state.formErrors} />
    <Form.Field>
         <label>Username</label>
         <div className="ui left icon input">
            <input name="username" onChange={(event)=>this.handleUserInput(event)}  placeholder='Username' value={this.state.username} required />
            <i className="user icon"></i>
        </div> 
    </Form.Field>
    <Form.Field>
        <label>Password</label>
        <input name="password" required value={this.state.password} onChange={(event)=>this.handleUserInput(event)}  placeholder='Password' type="password" />
    </Form.Field>
    <Button primary type='submit' disabled={this.state.formValid}>Login</Button>
  </Form>
  );
}
 }
export default LoginForm;
