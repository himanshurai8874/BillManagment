import React from 'react';

function SuccessModal({ isOpen, onClose, message }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal modal-dialog modal-sm">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default SuccessModal;