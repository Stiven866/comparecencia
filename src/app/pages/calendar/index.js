import React from "react";
import { CardBody, Container } from "reactstrap";
import { dateInsp } from "../../storage/data";
require("fullcalendar");
const $ = require("jquery");

class Calendar extends React.Component {
  componentDidMount() {
    $("#fullcalendar").fullCalendar({
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay,listMonth"
      },
      weekNumbers: true,
      eventLimit: true,
      editable: true,
      events: dateInsp,
    });
  }

  render() {
    return (
      <Container fluid className="p-0">
          <CardBody>
            <div id="fullcalendar" />
          </CardBody>
      </Container>
    );
  }
}

export default Calendar;
