import React from "react";
import { Row, Card, CardBody, Media } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import CenteredModal from "../../../modal-card";


const Activity = ({title, shortDescription, longDescription, img, time}) => (
  <Card className="flex-fill">
    <CardBody>
      <Media>
        <FontAwesomeIcon className="rounded-circle mr-1" icon={faFileAlt} size="lg"/> 
        <Media body>
          <small className="float-right text-navy">{time}</small>
          <p className="mb-2 center" >
            <strong>{title}</strong>
          </p>
          <Row>
            <div className="col-md-4 col-12 mt-2">
              <img src={img} className="img-fluid" alt="Unsplash" />
            </div>
            <div className="col-md-8 col-12 center mt-4 mb-4">
              <h5 className="text-muted">{shortDescription}</h5>
            </div>
          </Row>

          <br />
              <CenteredModal longDescription={longDescription}/>
        </Media>
      </Media>
    </CardBody>
  </Card>
);

export default Activity;
