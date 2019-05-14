import React from "react";
import { Container, Row, Col } from "reactstrap";

import Fine from "./fine";
import User from "./User";
import Following from "./Following";
import Activities from "./Activities";
import {fines} from "../../../storage/data"

const Social = () => (
  <Container className="p-0">
    <Row>
      <Col lg="12">
        {fines.map(({ id, title, description, img, time })=>
          <Fine 
            key={id} 
            title={title} 
            description={description}
            img={img}
            time={time}
            />)}
      </Col>
    </Row>
  </Container>
);

export default Social;
