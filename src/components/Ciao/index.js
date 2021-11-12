import {Component} from 'react';
class Ciao extends Component{
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
    const {name} = this.props;
    const {isHi} = this.state;
    return <>
    <h2>{isHi ? 'Hi' : 'Bye'}, {name}!</h2>
    <button onClick={this.handlerBtn}>Ciao</button>
    </>;
  }
}
export default Ciao;