import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'
 
class ParentComponent extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
  }
 
  handleFirstNameChange = event => {
      event.preventDefault()
    this.setState({
      firstName: event.target.value
    }, () => console.log(this.state.firstName))
  }
 
  handleLastNameChange = event => {
    event.preventDefault()
    this.setState({
      lastName: event.target.value
    })
  }
 
  render() {
    return ( <div>
      <Form
        formData={this.state}
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
      />
      <DisplayData formData={this.state} /></div>
    )
  }
}
 
export default ParentComponent;