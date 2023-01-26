import React from "react";

import "../../assets/css/black-dashboard-react.css";
import StudentReport from "../StudentReport/StudentReport";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import MainScreen from "../../components/MainScreen";
import Graph from "../../variables/charts.js";
import { Container } from "react-bootstrap";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <MainScreen title={`Dashboard`}>
        <Container>
          <div className="content">
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">Complete Report</h5>
                        <CardTitle tag="h2">Overall Performance</CardTitle>
                      </Col>
                      <Col sm="4"></Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Graph type="bar" />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>            
            <Row>
              <StudentReport />              
            </Row>
          </div>
        </Container>
      </MainScreen>
    </>
  );
}

export default Dashboard;
