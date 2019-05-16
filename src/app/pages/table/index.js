import React from "react";
import {
  Col,
  Container,
  Row,
  Table
} from "reactstrap";

const BorderedTable = ({details}) => (
    <div className="container">
      <Row>
        <Col>
          <Row>
          <Table bordered>
            <thead>
              <tr>
                <th style={{ width: "60%", background:"#000" }}>Secretaria de TyT</th>
                <th style={{ width: "40%", background:"#000"  }}>Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{details.office}</td>
                <td>{details.date}</td>
              </tr>
            </tbody>
          </Table>
          </Row>
          <Row className="mt-0">
            <Table bordered>
              <thead>
                <tr>
                  <th style={{ width: "100%", background:"#000"  }}>Dirección</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{details.direction}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row className="mt-0">
            <Table bordered>
              <thead>
                <tr>
                  <th style={{ width: "100%", background:"#000"  }}>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{details.phone}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>
        <Col className="ml-1">
          <Row className="mt-0">
            <Table bordered>
              <thead>
                <tr>
                  <th style={{ width: "100%", background:"#000"  }}>Ref 1: N°. Comparendo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{details.ref1}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row className="mt-0">
            <Table bordered>
              <thead>
                <tr>
                  <th style={{ width: "100%", background:"#000"  }}>Ref 1: N°. Placa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{details.plateNumber}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row className="mt-0">
            <Table bordered>
              <thead>
                <tr>
                  <th style={{ width: "100%", background:"#000" }}>Código Infracción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{details.infractionCode}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
      <Row>
        <Table bordered>
          <thead>
            <tr>
              <th style={{ width: "100%", background:"#000" }}>Total Consignación</th>
            </tr>
          </thead>
          <tbody>
            <td>{`$ ${details.totalToPay}`}</td>
          </tbody>
        </Table>
      </Row>
    </div>
);

const Tables = ({details}) => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Más Detalles</h1>
        <BorderedTable details={details}/>
  </Container>
);

export default Tables;
