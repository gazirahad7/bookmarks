import React from 'react';

import { ReactComponent as Close } from '../assets/icons/close.svg';

export default function Model({ open, children, close }) {
  if (!open) return null;

  return (
    <div>

      <div className="model-overlay">
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
