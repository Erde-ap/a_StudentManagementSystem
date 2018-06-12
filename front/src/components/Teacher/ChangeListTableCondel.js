import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Button} from 'reactstrap'
import {connect} from "react-redux";
import {onUpdateApprovalState} from "../../actions";

const ChangeListTableCondel = ({condel,onApprovalState}) => (
        <tr>
            <td className="align-middle text-nowrap">{condel.id}</td>
            <td className="align-middle text-nowrap">{condel.student_name}</td>
            <td className="align-middle text-nowrap">現状</td>
            <td className="align-middle text-nowrap">変更</td>
            <td className="align-middle text-nowrap">2018/05/28 1~4限</td>
            <td className="align-middle text-left  text-nowrap">{condel.reason}</td>
            <td><Button color="primary" size="sm"
                        onClick={() => onApprovalState(condel.id, true)}>変更</Button></td>
            <td><Button color="danger" size="sm"
                        onClick={() => onApprovalState(condel.id, false)}>却下</Button></td>
        </tr>
);

const mapStateToProps = (state, ownProps) => ({
    condel: ownProps.condel
});

const mapDispatchToProps = dispatch => ({
    onApprovalState: (id, flag) => {
        dispatch(onUpdateApprovalState(id ,flag))
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChangeListTableCondel);
