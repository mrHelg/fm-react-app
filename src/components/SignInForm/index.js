import React, { Component } from 'react';
import styles from './SignInForm.module.css';

const initialValues = {
      email:'',
      pwd:'',
      emailValid:true,
      pwdValid:true
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

function cx(object){
  return Object.entries(object)
        .filter(([className, condition])=>condition)
        .map(([className, condition])=>className)
        .join(' ')
}

    const {email, pwd, emailValid, pwdValid} = this.state;
    const emailClassName = cx({
      [styles.input]:true,
      [styles.invalid]:!emailValid
    })

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
        className={styles.input}/>
        <input type='submit' 
        value='Sign In' 
        className={styles.btn}/>
      </form>
    );
  }
}

export default SignInForm;
