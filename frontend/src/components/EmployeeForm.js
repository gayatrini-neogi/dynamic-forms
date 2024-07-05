// src/components/EmployeeForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EmployeeForm.css';

const EmployeeForm = ({ columns, onAddEmployee }) => {
  const initialFormState = columns.reduce((acc, col) => {
    acc[col.fieldName] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e, inputType) => {
    const { name, value } = e.target;

    // Validate input based on input type
    if (inputType === 'Text' && !/^[a-zA-Z\s]*$/.test(value)) {
      alert('Please enter text characters only.');
      return;
    }

    if (inputType === 'Numeric' && !/^\d*$/.test(value)) {
      alert('Please enter numeric values only.');
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee(formData);
    setFormData(initialFormState);
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      {columns.map((column) => (
        <div className="form-group" key={column.fieldName}>
          <label htmlFor={column.fieldName}>{column.displayName}:</label>
          <input
            type={column.inputType === 'Date' ? 'date' : 'text'}
            id={column.fieldName}
            name={column.fieldName}
            value={formData[column.fieldName]}
            onChange={(e) => handleInputChange(e, column.inputType)}
            required
          />
        </div>
      ))}
      <button type="submit">Save</button>
    </form>
  );
};

EmployeeForm.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      fieldName: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      inputType: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddEmployee: PropTypes.func.isRequired,
};

export default EmployeeForm;
