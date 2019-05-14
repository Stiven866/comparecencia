import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

import DateTime from "react-datetime";

const Calendar = () => (
  <Card className="flex-fill">
    <CardBody className="d-flex">
      <div className="align-self-center">
        <DateTime
          input={false}
          defaultValue={DateTime.moment()}
          dateFormat="l"
          timeFormat={false}
        />
      </div>
    </CardBody>
  </Card>
);

export default Calendar;
