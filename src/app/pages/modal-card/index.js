import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPlusSquare} from "@fortawesome/free-regular-svg-icons";
import Table from "../table";
import Calendar from "../calendar";


const buttonsCard = [
  {
    name: "AGENDAR COMPARECENCIA",
    value: "primary",
    icon: faCalendar
  },
  {
    name: "VER MAS",
    value: "primary",
    icon: faPlusSquare
  },
];


class CenteredModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle = index => {
    this.setState(state => ({
      [index]: !state[index]
    }));
  };

  componentWillMount() {
    buttonsCard.forEach((button, index) => {
      this.setState(() => ({
        [index]: false
      }));
    });
  }

  render() {
    const { longDescription } =this.props;
    return (
      <div className="container-fluid">
      {buttonsCard.map((button, index) => (
        <React.Fragment key={index}>
          <Button
            color={button.value}
            onClick={() => this.toggle(index)}
            className="mr-1"
          >
            <FontAwesomeIcon icon={button.icon} fixedWidth /> 
            {button.name}
          </Button>
          <Modal
            isOpen={this.state[index]}
            toggle={() => this.toggle(index)}
            centered
          >
            <ModalBody className="text-center m-1">
              {button.name === "AGENDAR COMPARECENCIA" ? <Calendar/>: <Table details={longDescription}/> }
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.toggle(index)}>
                Close
              </Button>{" "}
              <Button
                color="primary"
                onClick={() => this.toggle(index)}
              >
                Save changes
              </Button>
            </ModalFooter>
          </Modal>
        </React.Fragment>
      ))}
      </div>
    );
  }
}

export default CenteredModal;
