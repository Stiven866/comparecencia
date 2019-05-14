import React from "react";
import { Container, Row, Col } from "reactstrap";

import Statistics from "./Statistics";
import LineChart from "./LineChart";
import Feed from "./Feed";
import Calendar from "./Calendar";
import PieChart from "./PieChart";
import Appointments from "./Appointments";
import Projects from "./Projects";
import BarChart from "./BarChart";

import GoogleMapsMarker from "../../maps/GoogleMaps/Markers"

const Default = () => (
  <Container fluid>
    <GoogleMapsMarker/>
  </Container>
);

export default Default;
