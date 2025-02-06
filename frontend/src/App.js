

import './App.css';
import AddStudent from './components/AddStudent';
import DisplayStudents from './components/DisplayStudents';
import SearchStudent from './components/SearchStudent';
import ModifyStudent from './components/ModifyStudent';
import RemoveStudent from './components/RemoveStudent';

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", age: "", studentClass: "", phoneNumber: "" });
  const [searchName, setSearchName] = useState("");
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get("http://localhost:8080/students");
    setStudents(response.data);
  };

  const addStudent = async () => {
    await axios.post("http://localhost:8080/students", newStudent);
    setNewStudent({ name: "", age: "", studentClass: "", phoneNumber: "" });
    fetchStudents();
  };

  const searchStudents = async () => {
    const response = await axios.get(`http://localhost:8080/students/search?name=${searchName}`);
    setStudents(response.data);
  };

  const updateStudent = async () => {
    await axios.put(`http://localhost:8080/students/${editStudent.id}`, editStudent);
    setEditStudent(null);
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Management System</h2>
      
      <div className="card p-4 mb-4">
        <h4>Add Student</h4>
        <input type="text" placeholder="Name" className="form-control mb-2" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
        <input type="text" placeholder="Age" className="form-control mb-2" value={newStudent.age} onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })} />
        <input type="text" placeholder="Class" className="form-control mb-2" value={newStudent.studentClass} onChange={(e) => setNewStudent({ ...newStudent, studentClass: e.target.value })} />
        <input type="number" placeholder="Phone Number" className="form-control mb-2" value={newStudent.phoneNumber} onChange={(e) => setNewStudent({ ...newStudent, phoneNumber: e.target.value })} />
        <button className="btn btn-success" onClick={addStudent}>Add Student</button>
      </div>
      
      <div className="card p-4 mb-4">
        <h4>Search Student</h4>
        <input type="text" placeholder="Search by Name" className="form-control mb-2" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
        <button className="btn btn-primary" onClick={searchStudents}>Search</button>
      </div>

      <h4 className="mb-3">Student List</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.studentClass}</td>
              <td>{student.phoneNumber}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => setEditStudent(student)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editStudent && (
        <div className="card p-4 mt-4">
          <h4>Edit Student</h4>
          <input type="text" className="form-control mb-2" value={editStudent.name} onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })} />
          <input type="text" className="form-control mb-2" value={editStudent.age} onChange={(e) => setEditStudent({ ...editStudent, age: e.target.value })} />
          <input type="text" className="form-control mb-2" value={editStudent.studentClass} onChange={(e) => setEditStudent({ ...editStudent, studentClass: e.target.value })} />
          <input type="number" className="form-control mb-2" value={editStudent.phoneNumber} onChange={(e) => setEditStudent({ ...editStudent, phoneNumber: e.target.value })} />
          <button className="btn btn-success" onClick={updateStudent}>Update Student</button>
        </div>
      )}
    </div>
  );
};

export default StudentManagement;
