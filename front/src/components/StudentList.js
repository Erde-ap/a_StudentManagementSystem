import React, {Component} from 'react'
import {Container, Row, Col, Table, Button} from 'reactstrap'

class StudentList extends Component {
    render() {
        return (
            <Container>
                <Row className="mt-100">
                    <Col lg={{size: 4, offset: 2}}>
                        <h1>4年1組の出席状況</h1>
                    </Col>
                    <Col lg={{size: 1, offset: 1}}>
                        <Button color="primary" size="lg">＜</Button>
                    </Col>
                    <Col lg={{size: 1}}>
                        <Button color="primary" size="lg">＞</Button>
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
                                <th colSpan={5}>4/17(月)</th>
                                <th colSpan={5}>4/18(火)</th>
                                <th colSpan={5}>4/19(水)</th>
                                <th colSpan={5}>4/20(木)</th>
                                <th colSpan={5}>4/21(金)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>吉原菊江</td>
                                <td>100%</td>
                                <td className="table-warning">1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td className="table-danger">2</td>
                                <td className="table-danger">2</td>
                                <td className="table-danger">2</td>
                                <td className="table-danger">2</td>
                                <td className="table-danger">2</td>
                                <td className="table-info">3</td>
                                <td className="table-info">3</td>
                                <td className="table-info">3</td>
                                <td className="table-info">3</td>
                                <td className="table-info">3</td>
                                <td className="table-success">4</td>
                                <td className="table-success">4</td>
                                <td className="table-success">4</td>
                                <td className="table-success">4</td>
                                <td className="table-success">4</td>
                                <td className="table-primary">5</td>
                                <td className="table-primary">5</td>
                                <td className="table-primary">5</td>
                                <td className="table-primary">5</td>
                                <td className="table-primary">5</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>吉原菊次</td>
                                <td className="table-danger">80%</td>
                                <td className="table-warning">1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td className="table-danger">2</td>
                                <td className="table-danger">2</td>
                                <td className="table-danger">2</td>
                                <td className="table-danger">2</td>
                                <td className="table-danger">2</td>
                                <td className="table-info">3</td>
                                <td className="table-info">3</td>
                                <td className="table-info">3</td>
                                <td className="table-info">3</td>
                                <td className="table-info">3</td>
                                <td className="table-success">4</td>
                                <td className="table-success">4</td>
                                <td className="table-success">4</td>
                                <td className="table-success">4</td>
                                <td className="table-success">4</td>
                                <td className="table-primary">5</td>
                                <td className="table-primary">5</td>
                                <td className="table-primary">5</td>
                                <td className="table-primary">5</td>
                                <td className="table-primary">5</td>
                            </tr>
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
        )
    }
}

export default StudentList
