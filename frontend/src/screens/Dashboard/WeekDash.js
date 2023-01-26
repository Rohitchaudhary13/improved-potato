import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import "../../assets/css/black-dashboard-react.css";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import MainScreen from "../../components/MainScreen";
import Overall from "../../variables/charts/Overall";
import Intro from "../../variables/charts/Intro";
import Extra from "../../variables/charts/Extra";
import Intern from "../../variables/charts/Intern";
import Profile from "../../variables/charts/Profile";
import Skills from "../../variables/charts/Skills";
import Project from "../../variables/charts/Project";
import { Container } from "react-bootstrap";

function Dashboard(props, wk) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <MainScreen title={`Dashboard`}>
        <Container>
        <button onClick={() => window.print()} className="report-btn" style={{marginBottom:'1rem'}}>Download Report</button>
          <div className="content">
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">
                          Week {props.wk} Report
                        </h5>
                        <CardTitle tag="h2">Overall Performance</CardTitle>
                      </Col>
                      <Col sm="4"></Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Overall type="bar" week={props.wk} />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">
                          Week {props.wk} Report
                        </h5>
                        <CardTitle tag="h2">Introduction</CardTitle>
                      </Col>
                      <Col sm="4"></Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Intro type="bar" week={props.wk} />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">
                          Week {props.wk} Report
                        </h5>
                        <CardTitle tag="h2">Project</CardTitle>
                      </Col>
                      <Col sm="4"></Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Project type="bar" week={props.wk} />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">
                          Week {props.wk} Report
                        </h5>
                        <CardTitle tag="h2">Skills</CardTitle>
                      </Col>
                      <Col sm="4"></Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Skills type="bar" week={props.wk} />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">
                          Week {props.wk} Report
                        </h5>
                        <CardTitle tag="h2">Internship</CardTitle>
                      </Col>
                      <Col sm="4"></Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Intern type="bar" week={props.wk} />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">
                          Week {props.wk} Report
                        </h5>
                        <CardTitle tag="h2">Extracurriculars</CardTitle>
                      </Col>
                      <Col sm="4"></Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Extra type="bar" week={props.wk} />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">
                          Week {props.wk} Report
                        </h5>
                        <CardTitle tag="h2">Technical Profiles</CardTitle>
                      </Col>
                      <Col sm="4"></Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Profile type="bar" week={props.wk} />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </MainScreen>
    </>
  );
}

export default Dashboard;
