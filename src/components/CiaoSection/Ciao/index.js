import {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ciao.module.css';
class Ciao extends Component{
  /**
   * 
   * @param {*} props 
   * @param {string} props.name
   * @param {number} props.id
   */
  constructor(props){
    super(props);
    this.state = {
      isHi:true
    }
  }
  handlerBtn = ()=>{
    const {isHi} = this.state;
    this.setState({
      isHi:!isHi
    })
  }
  render(){
    const {name, id} = this.props;
    const {isHi} = this.state;
    if(isHi){
      return <>
        <h2 className={styles.container}>{id}) Hi, {name}!</h2>
        <button className={styles.btn} onClick={this.handlerBtn}>Ciao</button>
        </>;
    }
    return <h2>Bye, {name}!</h2>;
  }
}

Ciao.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Ciao;