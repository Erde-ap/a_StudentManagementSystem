import {connect} from 'react-redux';
import SendChangeView from '../components/SendChangeView'
import {onUpdateMonthState} from '../actions/index'

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    handleSubmit : (values) => {
        values.preventDefault();
        // print the form values to the console
        console.log(values)
    }
});

const SendChange = connect(
    mapStateToProps,
    mapDispatchToProps
)(SendChangeView);

export default SendChange;
