import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {connect} from "react-redux";

let ChangeListTableAlready = props => {
    const {already, approval} = props;
    return (
        <tr>
            <td className="text-nowrap">{already.apply_date === null ?  "" : already.apply_date.replace(/,/g,'/')}</td>
            <td className="text-nowrap">{already.student_name}</td>
            <td className="text-nowrap">変更前</td>
            <td className="text-nowrap">変更後</td>
            <td className="text-nowrap">2018/05/28 1~4限</td>
            <td className="text-left">{already.reason}</td>
            {approval(already.approval_state)}
        </tr>
    )
};

const mapStateToProps = (state, ownProps) => ({
    already: ownProps.already,
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
