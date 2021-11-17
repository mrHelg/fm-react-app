import React, { Component } from 'react';
import styles from './SignInForm.module.css';

const initialValues = {
      email:'',
      pwd:'',
      emailValid:false,
      pwdValid:false
    };

class SignInForm extends Component {
  constructor(props){
    super(props);
    this.state = {...initialValues}
  }

  handleInput = ({target:{name, value}}) => this.setState({
    [name]:value,
    [`${name}Valid`]: !value.includes(' ')
  })

  handleForm = (event)=>{
    event.preventDefault();
    //event.target.reset();
    this.setState({...initialValues})
  }
  render() {
    const {email, pwd, emailValid, pwdValid} = this.state;
    const emailClassName = `${styles.input} ${emailValid?styles.valid : styles.invalid}`;
    const pwdClassName = `${styles.input} ${pwdValid?styles.valid : styles.invalid}`;

    return (
      <form className={styles.container}
      onSubmit={this.handleForm}>
        <input type='text' 
        name='email'  
        value={email}
        placeholder='email'
        onChange={this.handleInput}
        className={emailClassName}/>
        <input type='password' 
        name='pwd'  
        value={pwd}
        placeholder='password'
        onChange={this.handleInput}
        className={pwdClassName}/>
        <input type='submit' 
        value='Sign In' 
        className={styles.btn}/>
      </form>
    );
  }
}

export default SignInForm;
