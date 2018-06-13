import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {connect} from "react-redux";

let ChangeListTableAlready = props => {
    const {already, approval,reqType} = props;
    return (
        <tr>
            <td className="text-nowrap">{already.apply_date === null ?  "" : already.apply_date.replace(/,/g,'/')}</td>
            <td className="text-nowrap">{already.student_name}</td>
            <td className="text-nowrap">{reqType(already.before_state)}</td>
            <td className="text-nowrap">{reqType(already.req_type)}</td>
            <td className="text-nowrap">{already.req_date === null ?  "" : already.req_date.replace(/,/g,'/')}</td>
            <td className="text-left">{already.reason}</td>
            {approval(already.approval_state)}
        </tr>
    )
};

const mapStateToProps = (state, ownProps) => ({
    already: ownProps.already,
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
    },
    approval: (approval_state) => {
        return approval_state === true ? <td className="table-primary text-nowrap">承認</td> : <td className="table-danger text-nowrap">却下</td>
    }
});

const mapDispatchToProps = dispatch => {
    return {
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChangeListTableAlready);
