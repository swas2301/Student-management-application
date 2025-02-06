import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:8080/students', {
        name, age, studentClass, phoneNumber
      });
      alert('Student added successfully!');
      setName('');
      setAge('');
      setStudentClass('');
      setPhoneNumber('');
    } catch (err) {
      setError('Error adding student');
    }
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
      <input type="text" placeholder="Class" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} required />
      <input type="text" placeholder="Phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      <button onClick={handleAdd}>Add Student</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddStudent;
