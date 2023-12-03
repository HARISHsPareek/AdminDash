import React from 'react';

const UsersTable = ({ currentUsers, selectedRows, handleSelectRow, handleDelete, handleEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {currentUsers.map(user => (
          <tr key={user.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedRows.includes(user.id)}
                onChange={() => handleSelectRow(user.id)}
              />
            </td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button onClick={() => handleEdit(user.id)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
