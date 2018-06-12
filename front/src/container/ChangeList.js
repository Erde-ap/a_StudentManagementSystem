import {connect} from 'react-redux';
import ChangeListView from "../components/Teacher/ChangeListView";

const mapStateToProps = state => ({
    condel: state.teacher.condel,
    already: state.teacher.already
});

const mapDispatchToProps = dispatch => ({

});

const ChangeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChangeListView);

export default ChangeList;
