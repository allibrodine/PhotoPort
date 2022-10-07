import React from 'react';

function Modal({ onClose, currentPhoto }) {
    const { name, category, description, index } = currentPhoto;

    return(
        <div className="modalBackdrop">
            <dvi className="modalConatainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current catergory" />
                <p>{description}</p>
                <button onClick={onClose} type="button">Close this modal</button>
            </dvi>
        </div>
    );
}

export default Modal;