import React, { Component } from 'react';
import styles from './SignInForm.module.css';

class SignInForm extends Component {
  render() {
    return (
      <form className={styles.container}>
        <input type='email' 
        name='email'  
        className={styles.input}/>
        <input type='password' 
        name='pwd'  
        className={styles.input}/>
        <input type='submit' 
        value='Sign In' 
        className={styles.btn}/>
      </form>
    );
  }
}

export default SignInForm;
