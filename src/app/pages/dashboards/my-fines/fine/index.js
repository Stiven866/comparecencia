import React from "react";
import { Row, Col, Button, Card, CardBody, Media } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faFileAlt, faPlusSquare} from "@fortawesome/free-regular-svg-icons";
import CenteredModal from "../../../modal-card";



import avatar1 from "../../../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../../../assets/img/avatars/avatar-2.jpg";
import avatar4 from "../../../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../../../assets/img/avatars/avatar-5.jpg";

import fotoMulta from "../../../../assets/img/photos/foto-multa.jpg";
import unsplash1 from "../../../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../../../assets/img/photos/unsplash-2.jpg";
import unsplash3 from "../../../../assets/img/photos/unsplash-3.jpg";


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
            <div className="col-md-4 col-12">
              <img src={img} className="img-fluid" alt="Unsplash" />
            </div>
            <div className="col-md-4 col-12">
              <small className="text-muted">{shortDescription}</small>
            </div>
          </Row>

          <br />
              <CenteredModal icon={faCalendar} longDescription={longDescription}/>
        </Media>
      </Media>
    </CardBody>
  </Card>
);

export default Activity;
