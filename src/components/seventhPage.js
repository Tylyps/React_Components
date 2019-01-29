import React from 'react';
import { connect } from 'react-redux';
import { selectNumberAfterAdd, selectNumberAfterSubtract } from '../selectors/selectors';
import FourthPage from './fourthPage';

const seventhPage = props => (
    <div className="center-component">
        <div>
            Fourth Page
            <FourthPage />
        </div>
        <div>
            Selectors: <br />
            <p>
                Number after add last added number: {props.futureAddNumber}
            </p>
            <p>
                Number after subtract last subtract number: {props.futureSubstractNumber}
            </p>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    futureAddNumber: selectNumberAfterAdd(state),
    futureSubstractNumber: selectNumberAfterSubtract(state),
});

export default connect(mapStateToProps)(seventhPage);
