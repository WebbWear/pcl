import React, { Component } from 'react';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const DEFAULT_STATE = {
  client_name: '', 
  client_phone: '',
  client_email: '',
  client_comment: '',
  pickup_location: '',
  pickup_time: moment()
}

class Notes extends Component {
  state = DEFAULT_STATE

  onUpdateField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

    if (e.target.name === 'client_name') {
      this.props.onUpdatePendingEvent({ title: e.target.value })
    }
  }

  onTimeChange = (value) => {
    this.setState({
      pickup_time: value
    })
  }

  componentDidMount() {
    const profile = this.props.auth.profile()
    this.setState({
      client_name: [profile.given_name, profile.family_name].join(' '),
      client_email: profile.email
    })
    console.log(this.props.auth.profile())
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (!this.props.pendingEvent.start) {
      alert("Pick a date!")
      return
    }
    
    const date = moment(this.props.pendingEvent.start)
    const pickup = this.state.pickup_time
    console.log({date, pickup})

    pickup.set({
      date: date.date(),
      month: date.month(),
      year: date.year()
    })

    console.log({pickup})

    fetch('/admin/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_name: this.state.client_name,
        client_phone: this.state.client_phone,
        client_email: this.state.client_email,
        client_comment: this.state.client_comment,
        pickup_location: this.state.pickup_location,
        pickup: pickup
      })
    }).then(() => {
      this.setState(DEFAULT_STATE)
      this.props.onEventSubmitted()
    })
  }

  render() {
    return (
      <div className="container">
        <form className="submission-form" onSubmit={this.handleSubmit}>
        
          <div className="form-header">
            <h1>Request Date</h1>
          </div>
          
          <h3> Name </h3>
          <input type="text" placeholder=" Name " size="50" name="client_name" value={this.state.client_name} onChange={this.onUpdateField} />

          <h3> Pick Up Time </h3>
          <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} use12Hours onChange={this.onTimeChange}/>

          <h3> Pick up Address </h3>
          <textarea cols="50" rows="7" name="pickup_location" value={this.state.pickup_location} onChange={this.onUpdateField}></textarea>

          <h3> Phone Number </h3>
          <input type="text" placeholder=" Phone Number " size="50" name="client_phone" value={this.state.client_phone} onChange={this.onUpdateField} />

          <h3> email </h3>
          <input type="text" placeholder=" email " size="50" name="client_email" value={this.state.client_email} onChange={this.onUpdateField} />

          <h3> Comments </h3>
          <textarea cols="50" rows="7" name="client_comment" value={this.state.client_comment} onChange={this.onUpdateField}></textarea>

          <input type="submit" name="submit1" value="Submit" className="button5" />
        </form>  
      </div>
    );
  }
}


export default Notes;
