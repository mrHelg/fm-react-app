import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }  
    this.intervalId = null;
  }

  start = ()=>{
    this.intervalId = setInterval(()=>{
      this.setState({count: this.state.count+1})
    },1000);
  }
    
  componentDidMount(){
    this.start()
  }

  componentDidUpdate(){
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  render() {
    const {count} = this.state;
    return (
      <article>
        <h2>{count}</h2>
        <button onClick={this.start}>start</button>
      </article>
    );
  }
}

export default StopWatch;
