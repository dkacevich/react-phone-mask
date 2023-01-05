import InputMask from 'react-input-mask';

import { useState, Component } from 'react'


const App = () => {

  const [value, setValue] = useState()


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <Input/>
      {/* <input type="text" placeholder="Phone" /> */}
      <button className="button" type="submit">Send</button>
    </form>
  )
}



class Input extends Component {
  state = {
    value: ''
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  beforeMaskedValueChange = (newState, oldState, userInput) => {
    var { value } = newState;
    var selection = newState.selection;
    var cursorPosition = selection ? selection.start : null;

    // keep minus if entered by user
    if (value.endsWith('-') && userInput !== '-' && !this.state.value.endsWith('-')) {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = { start: cursorPosition, end: cursorPosition };
      }
      value = value.slice(0, -1);
    }

    return {
      value,
      selection
    };
  }

  render() {
    return <InputMask placeholder='+38 (XXX) XXX - XX - XX' mask="+38 (999) 999 - 99 - 99" maskChar={null} value={this.state.value} onChange={this.onChange} beforeMaskedValueChange={this.beforeMaskedValueChange} />;
  }
}






export default App