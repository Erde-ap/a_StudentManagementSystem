import React from 'react'
import {Container, Row, Col, Table, Button} from 'reactstrap'
import StudentListTable from './StudentListTable'
import StudentData from '../../models/StudentData'

const StudentListView = ({studentList,student,week,onNextWeek,onPrevWeek}) => (
            <Container>
                <Row className="mt-100">
                    <Col lg={{size: 4, offset: 2}}>
                        <h1>4年1組の出席状況</h1>
                    </Col>
                    <Col lg={{size: 1, offset: 1}}>
                        <Button color="primary" size="lg" onClick={() => onPrevWeek(week)}>＜</Button>
                    </Col>
                    <Col lg={{size: 1}}>
                        <Button color="primary" size="lg" onClick={() => onNextWeek(week)}>＞</Button>
                    </Col>
                </Row>

                <Row className="mt-50">
                    <Col lg={{size: 12}}>
                        <Table className="table-bordered">
                            <thead>
                            <tr>
                                <th>番号</th>
                                <th>氏名</th>
                                <th>出席率</th>
                                <th colSpan={5}>{student === undefined ? "" : student.month1}/
                                                {student === undefined ? "" :student.day1}
                                                ({student === undefined ? "" :StudentData.getDayOfTheWeek(student.year1,student.month1,student.day1)})
                                </th>
                                <th colSpan={5}>{student === undefined ? "" : student.month2}/
                                                {student === undefined ? "" :student.day2}
                                                ({student === undefined ? "" :StudentData.getDayOfTheWeek(student.year2,student.month2,student.day2)})
                                </th>
                                <th colSpan={5}>{student === undefined ? "" : student.month3}/
                                                {student === undefined ? "" :student.day3}
                                                ({student === undefined ? "" :StudentData.getDayOfTheWeek(student.year3,student.month3,student.day3)})
                                </th>
                                <th colSpan={5}>{student === undefined ? "" : student.month4}/
                                                {student === undefined ? "" :student.day4}
                                                ({student === undefined ? "" :StudentData.getDayOfTheWeek(student.year4,student.month4,student.day4)})
                                </th>
                                <th colSpan={5}>{student === undefined ? "" : student.month5}/
                                                {student === undefined ? "" :student.day5}
                                                ({student === undefined ? "" :StudentData.getDayOfTheWeek(student.year5,student.month5,student.day5)})
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                studentList === undefined ? <tr></tr> : studentList.map((studentList,i) => {
                                    return <StudentListTable key={i} student={studentList}/>
                                })
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row className="mt-50">
                    <Col lg={{size: 10, offset: 1}}>
                        <table className="table table-bordered">
                            <tbody>
                            <tr>
                                <td>0:出席</td>
                                <td className="table-warning">1:遅刻</td>
                                <td className="table-danger">2:欠席</td>
                                <td className="table-info">3:就活</td>
                                <td className="table-success">4:病欠</td>
                                <td className="table-primary">5:公欠</td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
);

export default StudentListView
