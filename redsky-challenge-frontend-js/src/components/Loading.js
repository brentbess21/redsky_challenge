import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return(
        <div className='modal-background'>
            <div className='loading-container'>
                <Spinner animation="border" role="status" variant="danger">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>
    )
}

export default Loading; 