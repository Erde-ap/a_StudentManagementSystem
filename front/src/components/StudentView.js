import React from 'react'
import {Container, Row, Col, Table} from 'reactstrap'
import DayTable from './DayTable'

const StudentView = ({student,studentYear,onNextMonth,onPrevMonth}) => (
    <Container>
        <Row className="mt-80">
            <Col lg={12}><h3>飯塚大地さんの出席状況</h3></Col>
            <Col lg={12}>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>4月</th>
                        <th>5月</th>
                        <th>6月</th>
                        <th>7月</th>
                        <th>8月</th>
                        <th>9月</th>
                        <th>10月</th>
                        <th>11月</th>
                        <th>12月</th>
                        <th>1月</th>
                        <th>2月</th>
                        <th>3月</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {
                            studentYear.map((value,i) => (
                                value.num > 80 ? <td key={i}>{value.num}</td> : <td className="table-danger" key={i}>{value.num}</td>
                            ))
                        }
                    </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
        <Row className="mt-30">
            <Col lg={{size:2}}><h3>{student[0].month}月</h3></Col>
            <Col lg={{size:1, offset:2}}>
                <button type="button" className="btn-primary btn-lg" onClick={() => onPrevMonth()}>＜</button>
            </Col>
            <Col lg={{size:1}}>
                <button type="button" className="btn-primary btn-lg" onClick={() => onNextMonth()}>＞</button>
            </Col>
        </Row>
        <Row className="mt-30">
            <Col lg={{size:5}}>
                <Table  className="table-bordered">
                    <thead>
                    <tr>
                        <th colSpan={2}>日付</th>
                        <th>1限</th>
                        <th>2限</th>
                        <th>3限</th>
                        <th>4限</th>
                        <th>5限</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        student.slice(0,15).map((student,i) => (
                            <DayTable key={i} dayData={student}/>
                        ))
                    }
                    </tbody>
                </Table>
            </Col>
            <Col lg={{size:5}}>
                <Table  className="table-bordered ">
                    <thead>
                    <tr>
                        <th colSpan={2}>日付</th>
                        <th>1限</th>
                        <th>2限</th>
                        <th>3限</th>
                        <th>4限</th>
                        <th>5限</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        student.slice(15,31).map((student,i) => (
                            <DayTable key={i} dayData={student}/>
                        ))
                    }
                    </tbody>
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
                        <td className="table-warning">1</td>
                        <td>遅刻</td>
                    </tr>
                    <tr>
                        <td className="table-danger">2</td>
                        <td>欠席</td>
                    </tr>
                    <tr>
                        <td className="table-info">3</td>
                        <td>就活</td>
                    </tr>
                    <tr>
                        <td className="table-success">4</td>
                        <td>病欠</td>
                    </tr>
                    <tr>
                        <td className="table-primary">5</td>
                        <td>公欠</td>
                    </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    </Container>
);

export default StudentView;
