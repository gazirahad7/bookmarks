import React from 'react';

import Model from './Model';

export default function AddList() {
  const [show, setShow] = React.useState(false);
  return (
    <div>

      <Model open={show} onClose={() => setShow()}>

        <h1>Add</h1>

      </Model>
    </div>
  );
}
