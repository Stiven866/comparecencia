import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import avatar1 from "../../../assets/img/avatars/avatar.jpg";

const Navigation = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Configuraciones de Perfil
      </CardTitle>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem tag="a" href="#" action active>
        Account
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" action>
        Password
      </ListGroupItem>
     </ListGroup>
  </Card>
);

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate.toLocaleDateString(), '</li>');
  }
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

const PublicInfo = () => (
  <Card>
    <CardHeader>
      
      <CardTitle tag="h5" className="mb-0">
        Información Publica
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Form>
        <Row>
          <Col md="8">
            <FormGroup>
              <Label for="inputUsername">Nombre de Usuario</Label>
              <Input type="text" id="inputUsername" placeholder="Nombre de Usuario" />
            </FormGroup>
            <FormGroup>
              <Label for="inputBio">Biography</Label>
              <Input
                type="textarea"
                rows="2"
                id="inputBio"
                placeholder="Tell something about yourself"
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <div className="text-center">
              <img
                alt="Chris Wood"
                src={avatar1}
                className="rounded-circle img-responsive mt-2"
                width="128"
                height="128"
              />
              <div className="mt-2">
                <Button color="primary" onClick={handleFileSelect}>
                  <FontAwesomeIcon icon={faUpload} /> Upload
                </Button>
              </div>
              <small>
                For best results, use an image at least 128px by 128px in .jpg
                format
              </small>
            </div>
          </Col>
        </Row>

        <Button color="primary">Save changes</Button>
      </Form>
    </CardBody>
  </Card>
);

const PrivateInfo = () => (
  <Card>
    <CardHeader>
      <div className="card-actions float-right">
        <UncontrolledDropdown>
          <DropdownToggle tag="a">
            <MoreHorizontal />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardTitle tag="h5" className="mb-0">
        Private info
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First name</Label>
              <Input
                type="text"
                name="text"
                id="firstName"
                placeholder="First name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last name</Label>
              <Input
                type="text"
                name="text"
                id="lastName"
                placeholder="Last name"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="1234 Main St"
          />
        </FormGroup>
        <FormGroup>
          <Label for="address2">Address 2</Label>
          <Input
            type="text"
            name="address2"
            id="address2"
            placeholder="Apartment, studio, or floor"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" id="city" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input type="select" name="state" id="state">
                <option>Choose...</option>
                <option>...</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="zipcode">Zip</Label>
              <Input type="text" name="zip" id="zipcode" />
            </FormGroup>
          </Col>
        </Row>

        <Button color="primary">Save changes</Button>
      </Form>
    </CardBody>
  </Card>
);

const Settings = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Settings</h1>

    <Row>
      <Col md="4" xl="3">
        <Navigation />
      </Col>
      <Col md="8" xl="9">
        <PublicInfo />
        <PrivateInfo />
      </Col>
    </Row>
  </Container>
);

export default Settings;
