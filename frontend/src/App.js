import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importing BrowserRouter, Routes, and Route
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
    <Router>
      <div className="app">
        <h1>Employee Management</h1>
        
        {/* Use Routes to wrap Route components */}
        <Routes>
          {/* Route for Add Employee Form */}
          <Route path="/add-employee" element={<EmployeeForm columns={columns} onAddEmployee={handleAddEmployee} />} />
          
          {/* Default Route for Employee Management */}
          <Route path="/" element={
            <>
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
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
