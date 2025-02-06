import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const RemoveStudent = () => {
  const [id, setId] = useState('');

  const handleRemove = async () => {
    try {
      await axios.delete(`http://localhost:8080/students/${id}`);
      alert('Student removed successfully!');
    } catch (err) {
      alert('Error removing student');
    }
  };

  return (
    <div>
      <h2>Remove Student</h2>
      <input type="text" placeholder="Student ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <button onClick={handleRemove}>Remove Student</button>
    </div>
  );
};

export default RemoveStudent;
