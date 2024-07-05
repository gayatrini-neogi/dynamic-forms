// src/App.js
import React, { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import AddColumnPopup from './components/AddColumnPopup';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [columns, setColumns] = useState([
    { fieldName: 'firstName', displayName: 'First Name', inputType: 'Text' },
    { fieldName: 'lastName', displayName: 'Last Name', inputType: 'Text' },
    { fieldName: 'age', displayName: 'Age', inputType: 'Numeric' },
    { fieldName: 'description', displayName: 'Description', inputType: 'Text' }
  ]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleSaveField = (displayName, inputType) => {
    const fieldName = displayName.toLowerCase().replace(/\s+/g, '');
    setColumns([...columns, { fieldName, displayName, inputType }]);
    setIsPopupOpen(false);
    setIsFormVisible(true); // Show form after adding a column
  };

  const handleAddEmployee = (employeeData) => {
    setEmployees([...employees, employeeData]);
  };

  return (
    <div className="app">
      <h1>Employee Management</h1>
      <button className="add-column-btn" onClick={togglePopup}>
        Add Column
      </button>
      <AddColumnPopup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        onSave={handleSaveField}
      />
      {employees.length === 0 && !isFormVisible ? (
        <p>No entries yet.</p>
      ) : (
        <>
          {isFormVisible && <EmployeeForm columns={columns} onAddEmployee={handleAddEmployee} />}
          {employees.length > 0 && <EmployeeTable employees={employees} columns={columns} />}
        </>
      )}
    </div>
  );
};

export default App;
