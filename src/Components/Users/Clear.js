import React from 'react';

const Clear = ({ clearHandler }) => {
  return (
    <div>
      <input
        type="submit"
        value="Clear"
        className="btn btn-success btn-block"
        onClick={clearHandler}
      />
    </div>
  );
};

export default Clear;
