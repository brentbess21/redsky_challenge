import React from 'react';
import { connect } from 'react-redux';

import { hideToast } from './../actions/users-actions';

import { Toast, Row, Col, ToastContainer } from 'react-bootstrap';

const ActionToast = (props) => {

    const { showActionToast, prevAction } = props;
    return (
        <Row>
            <Col xs={20}>
                <ToastContainer className='p-1' position='top-end'> 
                    <Toast onClose={hideToast} show={showActionToast} delay={4000} autohide>
                        <Toast.Header>
                            <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                            onClick={hideToast}
                            />
                            <strong className="me-auto">Success!</strong>
                        </Toast.Header>
                        <Toast.Body>
                            A user was just {prevAction}!
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return({
        showActionToast: state.showActionToast,
        prevAction: state.prevAction
    })
}

const mapDispatchToProps = {hideToast}

export default connect(mapStateToProps, mapDispatchToProps)(ActionToast);
