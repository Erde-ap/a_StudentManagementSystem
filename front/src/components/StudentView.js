import React from 'react'
import {Container, Row, Col, Table} from 'reactstrap'
import DayTable from './DayTable'
import Header from './Header'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import "../../node_modules/bootstrap/dist/css/bootstrap-reboot.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css.map"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const StudentView = ({student}) => (
    <Container>
        <Header />
        <Row>
            <Col ></Col>
            <Col lg={12}><h3>daichiさんの出席状況</h3></Col>
            <Col lg={12}>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                    </tr>
                    </thead>
                    <tbody>
                    <td class="table-danger">50</td>
                    <td class="table-danger">60</td>
                    <td class="table-danger">70</td>
                    <td class="table-danger">80</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    </tbody>
                </table>
            </Col>
        </Row>
        <Row>
            <Col lg={{size:2}}><h3>4月</h3></Col>
            <Col lg={{size:1, offset:2}}>
                <button type="button" className="btn-primary btn-lg">＜</button>
            </Col>
            <Col lg={{size:1}}>
                <button type="button" className="btn-primary btn-lg">＞</button>
            </Col>
        </Row>
        <Row>
            <Col lg={{size:5}}>
                <Table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>1限</th>
                        <th>2限</th>
                        <th>3限</th>
                        <th>4限</th>
                        <th>5限</th>
                    </tr>
                    </thead>
                    {
                        student.map(student => (
                            <DayTable dayData={student}/>
                        ))
                    }
                </Table>
            </Col>
            <Col lg={{size: 5}}>
                <Table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>1限</th>
                        <th>2限</th>
                        <th>3限</th>
                        <th>4限</th>
                        <th>5限</th>
                    </tr>
                    </thead>
                    {
                        student.map(student => (
                            <DayTable dayData={student}/>
                        ))
                    }
                </Table>
            </Col>
            <Col lg={{size:2}}>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td>0</td>
                        <td>出席</td>
                    </tr>
                    <tr>
                        <td class="table-warning">1</td>
                        <td>遅刻</td>
                    </tr>
                    <tr>
                        <td class="table-danger">2</td>
                        <td>欠席</td>
                    </tr>
                    <tr>
                        <td class="table-info">3</td>
                        <td>就活</td>
                    </tr>
                    <tr>
                        <td class="table-success">4</td>
                        <td>病欠</td>
                    </tr>
                    <tr>
                        <td class="table-primary">5</td>
                        <td>公欠</td>
                    </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    </Container>
);

export default StudentView;
