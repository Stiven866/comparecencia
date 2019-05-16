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


const buttonsCard = [
  {
    name: "AGENDAR COMPARECENCIA",
    value: "primary",
  },
  {
    name: "VER MAS",
    value: "primary",
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
    const { icon, longDescription } =this.props;
    return (
      <div>
      {buttonsCard.map((button, index) => (
        <React.Fragment key={index}>
          <Button
            color={button.value}
            onClick={() => this.toggle(index)}
            className="mr-1"
          >
            <FontAwesomeIcon icon={icon} fixedWidth /> 
            {button.name}
          </Button>
          <Modal
            isOpen={this.state[index]}
            toggle={() => this.toggle(index)}
            centered
          >
            <ModalHeader toggle={() => this.toggle(index)}>
              Centered modal
            </ModalHeader>
            <ModalBody className="text-center m-3">
              <p className="mb-0">{longDescription}</p>
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
