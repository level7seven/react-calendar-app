import React, { Component } from 'react';
import {Route} from 'react-router';
import {Link, Redirect} from 'react-router-dom';
import '../css/Edit.css';
import '../css/ButtonsAndMore.css';
import { Row, Col, Hidden, ClearFix } from 'react-grid-system';
import "date-format-lite";
import MiniCalendarPicker from "../helper/MiniCalendarPicker";
import Holidays from 'date-holidays';



class DeleteEvent extends Component {

   render(){

		if (!this.props.eventObject) {
			return <Route render={({history}) => (<Redirect to="/" />) } />;
		}

      let startDate = this.props.eventObject.startDate.date('YYYY-MM-DD');
      let endDate = this.props.eventObject.endDate.date('YYYY-MM-DD');

      return(
			<Route render={({history}) => (
	         <div className="nice-form-div">
	            <h2>Delete Event?</h2>
	           <form name="Edit Event" className="nice-form" onSubmit={(e) => this.props.onClickDelete(this.props.eventObject)} >
	               <input type="text" name="eventName"  value={this.props.eventObject.name} readOnly/>
	               <h4>Start Date</h4>
	               <input className="margin-right-30" type="date" name="startDate" onChange={this.handleChange} value={startDate} />
	               <h5>Start Time</h5>
	               <input type="time" name="startTime" value={this.props.eventObject.startTime} />
	               <h4>End Date</h4>
	               <input className="margin-right-30" type="date" name="endDate"  value={endDate} />
	               <h5>End Time</h5>
	               <input type="time" name="endTime"  value={this.props.eventObject.endTime} />
	               <div>
	               <select value={this.props.eventObject.eventTypeId}  name="eventTypeId" readOnly>
	                   <option value="1">Meeting</option>
	                   <option value="2">Work</option>
	                   <option value="3">Appointment</option>
	                   <option value="4">Birthday</option>
	                   <option value="0">Holiday</option>
	               </select>
	               <select value={this.props.eventObject.priority}  name="eventPriority" readOnly>
	                   <option value="0">Lowest Priority</option>
	                   <option value="1">Low Priority</option>
	                   <option value="2">Medium Priority</option>
	                   <option value="3">High Priority</option>
	                   <option value="4">Highest Priority</option>
	               </select>
	               </div>
	               <div className="margin-top-50">

	               <input type="hidden" value={this.props.eventObject._id} />
	               <input type="submit" value="Delete Event" />
	               </div>
	           </form>
	           <Link className="btn outline margin-10" to="/">
					 cancel
				  </Link>
	        </div>
		   )} />
      );
   }
}



export default DeleteEvent;
