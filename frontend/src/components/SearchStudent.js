import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const SearchStudent = () => {
  const [name, setName] = useState('');
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/students/search?name=${name}`);
      setStudents(response.data);
      setError(null);
    } catch (err) {
      setError('No students found with the name: ' + name);
      setStudents([]);
    }
  };

  return (
    <div>
      <h2>Search Student by Name</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter student name" />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} ({student.studentClass}) - Age: {student.age} - Phone: {student.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchStudent;
