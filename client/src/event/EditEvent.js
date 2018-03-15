import React, { Component } from 'react';
import '../css/Edit.css';
import '../css/ButtonsAndMore.css';
import { Row, Col, Hidden, ClearFix } from 'react-grid-system';
import "date-format-lite";
import MiniCalendarPicker from "../helper/MiniCalendarPicker";
import Holidays from 'date-holidays';


class EditEvent extends Component {
   constructor(props){
      super(props);
      this.state = {
         eventName: "",
         startDate: "",
         startTime: "",
         endDate: "",
         endTime: "",
         eventType: 0,
         priority: 0
      }

      this.editCurrentEvent = this.editCurrentEvent.bind(this);
   }
   onClickCancel = (e) => {
      this.props.onClickEventAction(0);
   }

   componentDidMount() {
      let cc = JSON.parse(localStorage.getItem("currentEvent"));

      this.setState({
         _id: cc._id,
         eventName: cc.name,
         startDate: cc.startDate,
         startTime: cc.startTime,
         endDate: cc.endDate,
         endTime: cc.endTime,
         eventTypeId: cc.eventTypeId,
         priority: cc.priority,
         error: null
      });
   }

   editCurrentEvent(e) {
       e.preventDefault();
       if(this.state.startDate.date('U') > this.state.endDate.date('U')){
            this.setState({error: 'Uh oh! Before submitting, please enter a start date that is prior to your end date!'});
       }else{
            let eventObj = this.state;
            this.props.editEvent(eventObj);
       }
   }

   handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value, error: null});
   }

   handleTypeChange = (event) => {
     this.setState({eventTypeId: event.target.value});
   }

   render() {
       let errorMessage;
        if(this.state.error){
            errorMessage = (
                <div className="error-message">
                    <h3>{this.state.error}</h3>
                </div>
            );
        }else{
            errorMessage;
        }

      if(!this.state.startDate) {
            return (<div><div className="btn outline margin-10" onClick={this.onClickCancel}>cancel</div></div>);
      }

      let startDate = this.state.startDate.date('YYYY-MM-DD');
      let endDate = this.state.endDate.date('YYYY-MM-DD');

      return (
      <div className="nice-form-div">
          <form name="Edit Event" className="nice-form" onSubmit={this.editCurrentEvent}>
            <h3>Event Name</h3>
            <input type="text" name="eventName" onChange={this.handleChange} value={this.state.eventName} />
            <h4>Start Date</h4>
            <input type="date" name="startDate" onChange={this.handleChange} value={startDate} />
            <div className="spacer-30" />
            <MiniCalendarPicker name="startDate" onClick={this.handleChange} />
            <h5>Start Time</h5>
            <input type="time" name="startTime" onChange={this.handleChange} value={this.state.startTime} />
            <h4>End Date</h4>
            <input type="date" name="endDate" onChange={this.handleChange} value={endDate} />
            <div className="spacer-30" />
            <MiniCalendarPicker name="endDate" onClick={this.handleChange} />
            <h5>End Time</h5>
            <input type="time" name="endTime" onChange={this.handleChange} value={this.state.endTime} />
            <div>
              <select value={this.state.eventTypeId} onChange={this.handleTypeChange} name="eventTypeId">
                <option value="1">Meeting</option>
                <option value="2">Work</option>
                <option value="3">Appointment</option>
                <option value="4">Birthday</option>
                <option value="0">Holiday</option>
              </select>
              <select value={this.state.priority} onChange={this.props.handlePriorityChange} name="eventPriority">
                <option value="0">Lowest Priority</option>
                <option value="1">Low Priority</option>
                <option value="2">Medium Priority</option>
                <option value="3">High Priority</option>
                <option value="4">Highest Priority</option>
              </select>
            </div>
            <div className="margin-top-50">
              <input type="hidden" value={this.state._id} />
              <input type="submit" value="Submit" />
            </div>
          </form>
          <div className="btn outline margin-10" onClick={this.onClickCancel}>
            cancel
          </div>
          {errorMessage}
      </div>
      );
   }
}


export default EditEvent;
