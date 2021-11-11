import {Component} from 'react';
class Greeting extends Component{
  render(){
    const {name, word} = this.props;
    return <h2>{word}, {name}!</h2>;
  }
}
export default Greeting;