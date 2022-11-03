/* eslint-disable react/prop-types */
import React from 'react';
import { ReactComponent as Close } from '../assets/icons/close.svg';

export default function Model({ open, children, close }) {
  if (!open) return null;
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      close();
    }
  });
  return (
    <div>
      <div className="model-overlay modal">
        <div className="model-container">
          <button className="model-close" type="button" onClick={close}>
            <Close />
          </button>
          {children}
        </div>
      </div>

    </div>
  );
}
