import React from 'react';
import PropTypes from 'prop-types';

const Active = ({ isActive }) => {
  const activeColor = isActive ? 'active' : 'inactive';
  const activeText = isActive ? 'Active' : 'Inactive';
  return (
    <div className="cell-active">
      <span className={`is-active-dot ${activeColor}`} />{' '}
      <span className="is-active-text">{activeText}</span>
    </div>
  );
};

Active.propTypes = {
  isActive: PropTypes.bool,
};

Active.defaultProps = {
  isActive: false,
};

export default Active;
