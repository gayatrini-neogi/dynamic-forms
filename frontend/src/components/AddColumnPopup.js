// src/components/AddColumnPopup.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddColumnPopup.css';

const AddColumnPopup = ({ isOpen, onClose, onSave }) => {
  const [displayName, setDisplayName] = useState('');
  const [inputType, setInputType] = useState('Text');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(displayName, inputType);
    setDisplayName('');
    setInputType('Text');
  };

  return (
    <>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Add Column</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="displayName">Field Name:</label>
                <input
                  type="text"
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputType">Input Type:</label>
                <select
                  id="inputType"
                  value={inputType}
                  onChange={(e) => setInputType(e.target.value)}
                >
                  <option value="Text">Text</option>
                  <option value="Numeric">Numeric</option>
                  <option value="Date">Date</option>
                  <option value="RTF Control">RTF Control</option>
                </select>
              </div>
              <div className="button-group">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="close-btn" onClick={onClose}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

AddColumnPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AddColumnPopup;
