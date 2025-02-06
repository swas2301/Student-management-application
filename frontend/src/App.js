
import React from 'react';
import './App.css';
import AddStudent from './components/AddStudent';
import DisplayStudents from './components/DisplayStudents';
import SearchStudent from './components/SearchStudent';
import ModifyStudent from './components/ModifyStudent';
import RemoveStudent from './components/RemoveStudent';

function App() {
  return (
    <div className="App">
      <h1>Student Management Application</h1>
      
      {/* Add student */}
      <AddStudent />
      
      {/* Search student */}
      <SearchStudent />
      
      {/* Display all students */}
      <DisplayStudents />
      
      {/* Modify student */}
      <ModifyStudent />
      
      {/* Remove student */}
      <RemoveStudent />
    </div>
  );
}

export default App;
