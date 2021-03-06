import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput
} from "reactstrap";

import avatar from "../../assets/img/avatars/avatar.jpg";

const SignIn = () => (
  <React.Fragment>
    <div className="text-center mt-4">
      <h2>Welcome back, Chris</h2>
      <p className="lead">Sign in to your account to continue</p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          <div className="text-center">
            <img
              src={avatar}
              alt="Chris Wood"
              className="img-fluid rounded-circle"
              width="132"
              height="132"
            />
          </div>
          <Form>
            <FormGroup>
              <Label>Email</Label>
              <Input
                bsSize="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                bsSize="lg"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <small>
                <Link to="/auth/reset-password">Forgot password?</Link>
              </small>
            </FormGroup>
            <div>
              <CustomInput
                type="checkbox"
                id="rememberMe"
                label="Remember me next time"
                defaultChecked
              />
            </div>
            <div className="text-center mt-3 container">
              <div className="row">
              <div className="col-sm">
                <Link to="/comparecencia/my-fines">
                  <Button color="primary" size="lg">
                    Sign in
                  </Button>
                </Link>
              </div>
              <div className="col-sm">
                <Link to="/auth/sign-up">
                  <Button color="primary" size="lg">
                    Sign up
                  </Button>
                </Link>
              </div>
              </div>
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
  </React.Fragment>
);

export default SignIn;
