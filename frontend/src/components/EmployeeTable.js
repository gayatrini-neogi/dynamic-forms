// src/components/EmployeeTable.js
import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeTable.css';

const EmployeeTable = ({ employees, columns }) => {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.displayName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{employee[column.fieldName]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

EmployeeTable.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      fieldName: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      inputType: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmployeeTable;
