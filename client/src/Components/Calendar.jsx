import React, { Component } from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor(...args) {
    super(...args)
    this.state = { events: [] }
  }

  componentDidMount () {
    this.fetchEvents()
  }

  componentDidUpdate(prevProps) {
    if (this.props.pendingEvent.title === undefined && prevProps.pendingEvent.title !== undefined) {
      this.fetchEvents()
    }
  }

  fetchEvents () {
    fetch('/admin/events.json').then(r => r.json()).then(events => {
      this.setState({ events })
    })
  }

  handleSelect = ({ start, end }) => {
    this.props.onSelectDate(start, end);
  }
  
  propsForCalendar = (event) => {
    let props = {}
    if (event.pending) {
      props.className = 'pending'
    }
    if (event.unconfirmed) {
      props.className = 'unconfirmed'
    }
    return props      
  }

  render() {
    const { pendingEvent } = this.props    

    return (
        <BigCalendar
          selectable
          localizer={localizer}
          events={[...this.state.events, {
            ...pendingEvent,
            title: pendingEvent.title || "New Event",
          }]}
          defaultView={BigCalendar.Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
          eventPropGetter={this.propsForCalendar}
        />
    )
  }
}

export default Calendar;

