import React, { Component } from "react";
import { Row, Col } from 'react-grid-system';
import "date-format-lite";
import "../css/Month.css";

class MonthHeader extends Component {
   constructor(props) {
      super(props);
      this.state = {
         newViewDate: null
      }
   }

   onClickChangeMonth = (e) => {
      let newDate = "";
      let m=parseInt(this.props.viewDate.date("MM"));
      let y=parseInt(this.props.viewDate.date("YYYY"));
      if(e.target.id==1) {
         m--;
         if (m<1) {
            m=12;
            y--;
         }
      } else {
         m++;
         if (m>12) {
            m=1;
            y++;
         }
      }
      newDate = (y+"-"+m+"-"+this.props.viewDate.date("DD")).date();
      this.props.onClickDay(newDate);
   }

  render() {

     let date = this.props.viewDate;
     if (!date) date="";

    return (
      <Row>


            <Col sm={4} style={{textAlign:"right"}}><span className="button-round" id="1" onClick={this.onClickChangeMonth}>&lt;</span></Col>
            <Col sm={4}>

               <span className="month-header">{date.date("MMMM")} {date.date("YYYY")} </span>

            </Col>
            <Col sm={4} style={{textAlign:"left"}}><span className="button-round" id="2" onClick={this.onClickChangeMonth}>&gt;</span></Col>


      </Row>
    );
  }
}

export default MonthHeader;
