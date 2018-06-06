import {connect} from 'react-redux';
import SendChangeView from '../components/SendChangeView';
import {postMessage} from "../actions";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    send : (e) => {
        e.preventDefault();
        dispatch(postMessage(this.myInput.value));
        this.myInput.value = '';
    }
});

const SendChange = connect(
    mapStateToProps,
    mapDispatchToProps
)(SendChangeView);

export default SendChange;
