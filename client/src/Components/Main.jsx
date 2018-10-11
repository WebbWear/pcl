import React, { Component } from 'react';

import Notes from "./Notes";
import Calendar from "./Calendar";

const DEFAULT_PENDING_EVENT = {
  pending: true,
  start: null,
  end: null,
  allDay: true
}

class Main extends Component {
    state = {
        pendingEvent: DEFAULT_PENDING_EVENT
    }

    handleDateChange = (start, end) => {
      this.setState({
        pendingEvent: {
          ...this.state.pendingEvent,
          start,
          end
        }
      })
    }

    updatePendingEvent = (pendingEvent) => {
      this.setState({
        pendingEvent: {
          ...this.state.pendingEvent,
          ...pendingEvent
        }
      })
    }

    resetPendingDate = () => {
      this.setState({
        pendingEvent: DEFAULT_PENDING_EVENT
      })
    }

    render() {
      return (
        <div className="main">
        <Notes auth={this.props.auth} onUpdatePendingEvent={this.updatePendingEvent} pendingEvent={this.state.pendingEvent} onEventSubmitted={this.resetPendingDate} />
        <Calendar pendingEvent={this.state.pendingEvent} onSelectDate={this.handleDateChange} />
        </div>
      );
    }
}

export default Main;
