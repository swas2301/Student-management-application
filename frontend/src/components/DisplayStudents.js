import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const DisplayStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div>
      <h2>All Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} ({student.studentClass}) - Age: {student.age} - Phone: {student.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayStudents;
