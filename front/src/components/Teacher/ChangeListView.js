import React from 'react'
import {Container, Row, Col, Table} from 'reactstrap'
import ChangeListTableCondel from './ChangeListTableCondel'
import ChangeListTableAlready from './ChangeListTableAlready'

const ChangeListView = ({condel,already}) => (
            <Container>
                <Row className="mt-100">
                    <Col lg={{size:4, offset:4}}>
                        <h1>変更届け一覧画面</h1>
                    </Col>
                </Row>
                <Row className="mt-50">
                    <h1>新規</h1>
                    <Table className="table-bordered">
                        <tbody>
                        <tr>
                            <th>氏名</th>
                            <th>現状</th>
                            <th>変更</th>
                            <th>日時</th>
                            <th>理由</th>
                            <th>承認</th>
                            <th>却下</th>
                        </tr>
                        {
                            condel.map((condel,i) => (
                                <ChangeListTableCondel key={i} condel={condel}/>
                            ))
                        }
                        </tbody>
                    </Table>
                </Row>
                <Row className="mt-50">
                    <h1>履歴</h1>
                    <Table className="table-bordered">
                        <tbody>
                        <tr>
                            <th>変更時刻</th>
                            <th>氏名</th>
                            <th>変更前</th>
                            <th>変更後</th>
                            <th>日時</th>
                            <th>理由</th>
                            <th>結果</th>
                        </tr>
                        {
                            already.map((already,i) => (
                                <ChangeListTableAlready key={i} already={already}/>
                            ))
                        }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );

export default ChangeListView
