import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {Button} from 'reactstrap'
import {connect} from "react-redux";
import {onUpdateApprovalState} from "../../actions";

const ChangeListTableCondel = ({condel,onApprovalState,reqType}) => (
        <tr>
            <td className="align-middle text-nowrap">{condel.student_name}</td>
            <td className="align-middle text-nowrap">{reqType(condel.before_state)}</td>
            <td className="align-middle text-nowrap">{reqType(condel.req_type)}</td>
            <td className="align-middle text-nowrap">{condel.req_year}{condel.req_month}/{condel.req_day} {condel.period_start
            }限から{condel.period_end}限</td>
            <td className="align-middle text-left  text-nowrap">{condel.reason}</td>
            <td><Button color="primary" size="sm"
                        onClick={() => onApprovalState(condel.id, true)}>変更</Button></td>
            <td><Button color="danger" size="sm"
                        onClick={() => onApprovalState(condel.id, false)}>却下</Button></td>
        </tr>
);

const mapStateToProps = (state, ownProps) => ({
    condel: ownProps.condel,
    reqType: (req) => {
        switch (req){
            case 0:
                return "出席";
            case 1:
                return "遅刻";
            case 2:
                return "欠席";
            case 3:
                return "就活";
            case 4:
                return "病欠";
            case 5:
                return "公欠";
            case 8:
                return "休日";
            case 9:
                return "未定";
            default:
                return "";
        }
    }
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
