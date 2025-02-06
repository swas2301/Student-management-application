import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ModifyStudent = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [phoneNumber, setPhone] = useState('');

  const handleModify = async () => {
    try {
      await axios.put(`http://localhost:8080/students/${id}`, {
        name, age, studentClass, phoneNumber
      });
      alert('Student updated successfully!');
    } catch (err) {
      alert('Error updating student');
    }
  };

  return (
    <div>
      <h2>Modify Student</h2>
      <input type="text" placeholder="Student ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Class" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
      <input type="text" placeholder="Phone" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleModify}>Modify Student</button>
    </div>
  );
};

export default ModifyStudent;
