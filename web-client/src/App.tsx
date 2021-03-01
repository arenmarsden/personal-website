import React from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import axios from 'axios';

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      email: '',
      enquiry: '',
      message: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* TODO: Logo */}
          <img src={logo} className="App-logo" alt="logo"/>
          <h3>
            Aren Marsden
          </h3>
          <p>
            College Student & Java Developer<br/>
            <small>England, United Kingdom</small>
          </p>
        </header>

        <header className="contact-header">
          <h3>Contact</h3>

          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" required/>
            </div>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp"
                     required/>
            </div>
            <div className="form-group">
              <label htmlFor="enquiry">Enquiry</label>
              <select id="enquiry" name="enquiry">
                <option value="services">Services</option>
                <option value="services">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="details">Details</label>
              <textarea className="form-control" rows={5}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </header>
      </div>
    )
  }

  resetForm() {
    this.setState({name: '', email: '', enquiry: '', message: ''});
  }

  onNameChange(event: any) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event: any) {
    this.setState({email: event.target.value})
  }

  onEnquiryChange(event: any) {
    this.setState({enquiry: event.target.value})
  }

  onMessageChange(event: any) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event: any) {
    event.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: this.state
    }).then(rsp => {
      if (rsp.data.status === 'success') {
        alert('Message Sent');
        this.resetForm()
      } else if (rsp.data.status === 'fail') {
        alert('Message failed to send.');
      }
    });
  }
}
