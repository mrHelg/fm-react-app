import React, { Component } from 'react';
import { format, add } from 'date-fns';
import { ru } from 'date-fns/locale';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  btnHandle = (options) => {
    const { date } = this.state;
    const newDate = add(date, options);
    this.setState({ date: newDate });
  };

  render() {
    const { day } = this.state;
    return (
      <>
        <h2>{format(day, "dd MMMM yy 'year, ' EEEE", { locale: ru })}</h2>
        <button onClick={()=> this.btnHandle({day:1})}>Add 1 day</button>
        <button onClick={()=> this.btnHandle({week:1})}>Add 1 week</button>
        <button onClick={()=> this.btnHandle({month:1})}>Add 1 month</button>
      </>
    );
  }
}

export default Calendar;
