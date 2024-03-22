import React from 'react';

const MyModal = ({ show, onClose, children }) => {
    return (
        <div className={`modal fade ${show ? 'show d-block' : ''}`} aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        {/* <h5 className="modal-title" id="myModalLabel"> Create New Event</h5> */}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body" style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button " className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyModal;
