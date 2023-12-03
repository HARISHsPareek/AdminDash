// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const AdminDashboard = () => {
// //   const [users, setUsers] = useState([]);
// //   const [filteredUsers, setFilteredUsers] = useState([]);
// //   const [selectedRows, setSelectedRows] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const itemsPerPage = 10;

// //   useEffect(() => {
// //     axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
// //       .then(response => {
// //         setUsers(response.data);
// //         setFilteredUsers(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching users:', error);
// //       });
// //   }, []);

// //   useEffect(() => {
// //     // Filter users based on search input
// //     const filtered = users.filter(user =>
// //       Object.values(user).some(value =>
// //         String(value).toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     );
// //     setFilteredUsers(filtered);
// //     setCurrentPage(1); // Reset to first page after search
// //   }, [searchTerm, users]);

// //   const handleSearch = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const handleSelectRow = (userId) => {
// //     const selected = [...selectedRows];
// //     if (selected.includes(userId)) {
// //       selected.splice(selected.indexOf(userId), 1);
// //     } else {
// //       selected.push(userId);
// //     }
// //     setSelectedRows(selected);
// //   };

// //   const deleteSelected = () => {
// //     const updatedUsers = users.filter(user => !selectedRows.includes(user.id));
// //     setUsers(updatedUsers);
// //     setFilteredUsers(updatedUsers);
// //     setSelectedRows([]);
// //   };

// //   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
// //   const lastIndex = currentPage * itemsPerPage;
// //   const firstIndex = lastIndex - itemsPerPage;
// //   const currentUsers = filteredUsers.slice(firstIndex, lastIndex);

// //   const handlePageChange = (page) => {
// //     setCurrentPage(page);
// //   };

// //   return (
// //     <div className="admin-dashboard">
// //       <input
// //         type="text"
// //         placeholder="Search"
// //         value={searchTerm}
// //         onChange={handleSearch}
// //       />

// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Select</th>
// //             <th>ID</th>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>Role</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {currentUsers.map(user => (
// //             <tr key={user.id}>
// //               <td>
// //                 <input
// //                   type="checkbox"
// //                   checked={selectedRows.includes(user.id)}
// //                   onChange={() => handleSelectRow(user.id)}
// //                 />
// //               </td>
// //               <td>{user.id}</td>
// //               <td>{user.name}</td>
// //               <td>{user.email}</td>
// //               <td>{user.role}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       <div className="pagination">
// //         <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
// //         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
// //         <span>{`Page ${currentPage} of ${totalPages}`}</span>
// //         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
// //         <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>Last</button>
// //       </div>

// //       <button onClick={deleteSelected} disabled={selectedRows.length === 0}>
// //         Delete Selected
// //       </button>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');

//   const itemsPerPage = 10;

//   useEffect(() => {
//     axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
//       .then(response => {
//         setUsers(response.data);
//         setFilteredUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Filter users based on search input
//     const filtered = users.filter(user =>
//       Object.values(user).some(value =>
//         String(value).toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//     setFilteredUsers(filtered);
//     setCurrentPage(1); // Reset to first page after search
//   }, [searchTerm, users]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSelectRow = (userId) => {
//     const selected = [...selectedRows];
//     if (selected.includes(userId)) {
//       selected.splice(selected.indexOf(userId), 1);
//     } else {
//       selected.push(userId);
//     }
//     setSelectedRows(selected);
//   };

//   const handleDelete = (userId) => {
//     const updatedUsers = users.filter(user => user.id !== userId);
//     setUsers(updatedUsers);
//     setFilteredUsers(updatedUsers);
//     setSelectedRows(selectedRows.filter(id => id !== userId));
//   };

//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
//   const lastIndex = currentPage * itemsPerPage;
//   const firstIndex = lastIndex - itemsPerPage;
//   const currentUsers = filteredUsers.slice(firstIndex, lastIndex);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="admin-dashboard">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleSearch}
//       />

//       <table >
//         <thead>
//           <tr>
//             <th>Select</th>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Actions</th> {/* New column for Edit and Delete */}
//           </tr>
//         </thead>
//         <tbody>
//           {currentUsers.map(user => (
//             <tr key={user.id}>
//               <td>
//                 <input
//                   type="checkbox"
//                   checked={selectedRows.includes(user.id)}
//                   onChange={() => handleSelectRow(user.id)}
//                 />
//               </td>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td>
//                 {/* Edit and Delete buttons */}
//                 <button onClick={() => handleDelete(user.id)}>Delete</button>
//                 {/* For Edit functionality, you can implement an edit modal or inline editing */}
//                 {/* <button onClick={() => handleEdit(user.id)}>Edit</button> */}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//       <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
//          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
//          <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>Last</button>
//       </div>

//       <button onClick={() => handleDelete(selectedRows)} disabled={selectedRows.length === 0}>
//         Delete Selected
//       </button>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersTable from './UsersTable';
import Pagination from './Pagination';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  useEffect(() => {
    // Filter users based on search input
    const filtered = users.filter(user =>
      Object.values(user).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page after search
  }, [searchTerm, users]);

  // ... Functions for handling search, select, delete, and pagination ...
  const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
        const deleteSelected = () => {
    const updatedUsers = users.filter(user => !selectedRows.includes(user.id));
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedRows([]);
  };
    
  const handleSelectRow = (userId) => {
        const selected = [...selectedRows];
        if (selected.includes(userId)) {
          selected.splice(selected.indexOf(userId), 1);
        } else {
          selected.push(userId);
        }
        setSelectedRows(selected);
      };
      const handleEdit = (userId) => {
        // Find the user to edit based on ID
        const userToEdit = users.find(user => user.id === userId);
        setEditingUser(userToEdit);
        // You can open a modal or populate a form for editing with userToEdit details
        // For example, you can display a modal by setting a state to manage its visibility
      };
      const handleUpdate = (updatedUserData) => {
        // Update the user's data in the users state array
        const updatedUsers = users.map(user =>
          user.id === updatedUserData.id ? { ...user, ...updatedUserData } : user
        );
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        setEditingUser(null); // Reset editingUser state after updating
        // Close the modal or reset the form after updating
      };
    
     
  
    
  const handleDelete = (userId) => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        setSelectedRows(selectedRows.filter(id => id !== userId));
      };
    
      const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
      const lastIndex = currentPage * itemsPerPage;
      const firstIndex = lastIndex - itemsPerPage;
      const currentUsers = filteredUsers.slice(firstIndex, lastIndex);
    
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };

  return (
    <div className="admin-dashboard">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      
      <UsersTable
  currentUsers={currentUsers}
  selectedRows={selectedRows}
  handleSelectRow={handleSelectRow}
  handleDelete={deleteSelected}
  handleEdit={handleEdit}
/>


      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />

      <button onClick={() => handleDelete(selectedRows)} disabled={selectedRows.length === 0}>
        Delete Selected
      </button>
    </div>
  );
  };

export default AdminDashboard;


