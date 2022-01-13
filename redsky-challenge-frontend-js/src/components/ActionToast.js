import React from 'react';

import { Toast, Row, Col, ToastContainer } from 'react-bootstrap';

const ActionToast = (props) => {

    const { showToast, setShowToast } = props;
    return (
        <Row>
            <Col xs={20}>
                <ToastContainer className='p-1' position='top-end'> 
                    <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                        <Toast.Header>
                            <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                            />
                            <strong className="me-auto">Success!</strong>
                            <small>Just Now</small>
                        </Toast.Header>
                        <Toast.Body>
                            A new user was added to the User List!
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>
        </Row>
    )
}

export default ActionToast;
