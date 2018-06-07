import React, {Component} from 'react'
import {Container, Row, Col, Table, Button} from 'reactstrap'

class ChangeList extends Component{
    render(){
        return(
            <Container>
                <Row className="mt-100">
                    <Col lg={{size:4, offset:4}}>
                        <h1>変更届け一覧画面</h1>
                    </Col>
                </Row>
                <Row className="mt-50">
                    <Table className="table-bordered">
                        <tbody>
                        <tr>
                            <th rowSpan={8} className="align-middle table-primary">新規</th>
                            <th>番号</th>
                            <th>氏名</th>
                            <th>現状</th>
                            <th>変更</th>
                            <th>日時</th>
                            <th>理由</th>
                            <th>承認</th>
                            <th>却下</th>
                        </tr>
                        <tr>
                            <td className="align-middle">1</td>
                            <td className="align-middle">吉原菊江</td>
                            <td className="align-middle">遅刻</td>
                            <td className="align-middle">出席</td>
                            <td className="align-middle">2018/05/28 1~4限</td>
                            <td className="align-middle">就活に行っていました。</td>
                            <td><Button color="primary" size="sm">変更</Button></td>
                            <td><Button color="danger" size="sm">却下</Button></td>
                        </tr>
                        <tr>
                            <td className="align-middle">2</td>
                            <td className="align-middle">吉原菊次</td>
                            <td className="align-middle">遅刻</td>
                            <td className="align-middle">出席</td>
                            <td className="align-middle">2018/05/28 1~4限</td>
                            <td className="align-middle">就活に行っていました。</td>
                            <td><Button color="primary" size="sm">変更</Button></td>
                            <td><Button color="danger" size="sm">却下</Button></td>
                        </tr>
                        <tr>
                            <td className="align-middle">3</td>
                            <td className="align-middle">吉原菊美</td>
                            <td className="align-middle">遅刻</td>
                            <td className="align-middle">出席</td>
                            <td className="align-middle">2018/05/28 1~4限</td>
                            <td className="align-middle">就活に行っていました。</td>
                            <td><Button color="primary" size="sm">変更</Button></td>
                            <td><Button color="danger" size="sm">却下</Button></td>
                        </tr>
                        <tr>
                            <td className="align-middle">4</td>
                            <td className="align-middle">吉原菊代</td>
                            <td className="align-middle">遅刻</td>
                            <td className="align-middle">出席</td>
                            <td className="align-middle">2018/05/28 1~4限</td>
                            <td className="align-middle">就活に行っていました。</td>
                            <td><Button color="primary" size="sm">変更</Button></td>
                            <td><Button color="danger" size="sm">却下</Button></td>
                        </tr>
                        <tr>
                            <td className="align-middle">5</td>
                            <td className="align-middle">吉原菊雄</td>
                            <td className="align-middle">遅刻</td>
                            <td className="align-middle">出席</td>
                            <td className="align-middle">2018/05/28 1~4限</td>
                            <td className="align-middle">就活に行っていました。</td>
                            <td><Button color="primary" size="sm">変更</Button></td>
                            <td><Button color="danger" size="sm">却下</Button></td>
                        </tr>
                        <tr>
                            <td className="align-middle">6</td>
                            <td className="align-middle">吉原菊宗</td>
                            <td className="align-middle">遅刻</td>
                            <td className="align-middle">出席</td>
                            <td className="align-middle">2018/05/28 1~4限</td>
                            <td className="align-middle">就活に行っていました。</td>
                            <td><Button color="primary" size="sm">変更</Button></td>
                            <td><Button color="danger" size="sm">却下</Button></td>
                        </tr>
                        <tr>
                            <td className="align-middle">7</td>
                            <td className="align-middle">吉原菊菜</td>
                            <td className="align-middle">遅刻</td>
                            <td className="align-middle">出席</td>
                            <td className="align-middle">2018/05/28 1~4限</td>
                            <td className="align-middle">就活に行っていました。</td>
                            <td><Button color="primary" size="sm">変更</Button></td>
                            <td><Button color="danger" size="sm">却下</Button></td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row className="mt-50">
                    <Table className="table-bordered">
                        <tbody>
                        <tr>
                            <th rowSpan={8} className="align-middle table-warning">履歴</th>
                            <th>変更時刻</th>
                            <th>氏名</th>
                            <th>変更前</th>
                            <th>変更後</th>
                            <th>日時</th>
                            <th>理由</th>
                            <th>結果</th>
                        </tr>
                        <tr>
                            <td>2018/05/28 16:48</td>
                            <td>吉原菊江</td>
                            <td>遅刻</td>
                            <td>出席</td>
                            <td>2018/05/28 1~4限</td>
                            <td>就活に行っていました。</td>
                            <td className="table-danger">却下</td>
                        </tr>
                        <tr>
                            <td>2018/05/28 16:48</td>
                            <td>吉原菊次</td>
                            <td>遅刻</td>
                            <td>出席</td>
                            <td>2018/05/28 1~4限</td>
                            <td>就活に行っていました。</td>
                            <td className="table-primary">変更</td>
                        </tr>
                        <tr>
                            <td>2018/05/28 16:48</td>
                            <td>吉原菊美</td>
                            <td>遅刻</td>
                            <td>出席</td>
                            <td>2018/05/28 1~4限</td>
                            <td>就活に行っていました。</td>
                            <td className="table-danger">却下</td>
                        </tr>
                        <tr>
                            <td>2018/05/28 16:48</td>
                            <td>吉原菊代</td>
                            <td>遅刻</td>
                            <td>出席</td>
                            <td>2018/05/28 1~4限</td>
                            <td>就活に行っていました。</td>
                            <td className="table-danger">却下</td>
                        </tr>
                        <tr>
                            <td>2018/05/28 16:48</td>
                            <td>吉原菊雄</td>
                            <td>遅刻</td>
                            <td>出席</td>
                            <td>2018/05/28 1~4限</td>
                            <td>就活に行っていました。</td>
                            <td className="table-danger">却下</td>
                        </tr>
                        <tr>
                            <td>2018/05/28 16:48</td>
                            <td>吉原菊宗</td>
                            <td>遅刻</td>
                            <td>出席</td>
                            <td>2018/05/28 1~4限</td>
                            <td>就活に行っていました。</td>
                            <td className="table-danger">却下</td>
                        </tr>
                        <tr>
                            <td>2018/05/28 16:48</td>
                            <td>吉原菊菜</td>
                            <td>遅刻</td>
                            <td>出席</td>
                            <td>2018/05/28 1~4限</td>
                            <td>就活に行っていました。</td>
                            <td className="table-danger">却下</td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }
}

export default ChangeList
