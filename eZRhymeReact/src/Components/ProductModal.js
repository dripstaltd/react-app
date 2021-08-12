import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Paper from '@material-ui/core/Paper';

function ProductModal(props) {
  const [showModal, setShowModal] = useState(false);
  const product = props.thisData;

  let modalContent;

  if (showModal === false) {
    modalContent = (
      <div>
        <div className="modal__overlay"></div>
        <div className="card__btn" onClick={() => setShowModal(true)}>
          <span>
            <FontAwesomeIcon icon={faPlus} onClick={() => setShowModal(true)} />
          </span>
        </div>
      </div>
    );
    return modalContent;
  }
  if (showModal === true) {
    modalContent = (
      <div>
        <div className="w-full">
          <Paper elevation={3} className="relative">
            <p className="">1UNI £{product.peruni}</p>
            <p>{product.description}</p>
            <FontAwesomeIcon
              className="modal__close"
              style={{ position: 'absolute', top: '1rem', right: '1rem' }}
              icon={faWindowClose}
              onClick={() => setShowModal(false)}
            />
          </Paper>
        </div>
      </div>
    );
  }

  return modalContent;
}

export default ProductModal;
