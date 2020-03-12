import React, { useState } from "react";


const UserCard = ({ user, deleteUser, editUser }) => {
  const [editing, setEditing] = useState(false);
  const [userEdit, setUserEdit] = useState(user);
  const [editMode, setEditMode] = useState(false);

  const handleDeleteClick = () => {
    deleteUser(user.id);
    window.location.reload();
  };

  const handleEditClick = () => {
    setEditing(true);
    setEditMode(!editMode);
  };

  const handleSubmit = e => {
    e.preventDefault();
    editUser(userEdit);
    setEditing(false);
    // window.location.reload()
  };

  const handleChange = e => {
    setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
  };

  return (
    <div className="user-cta">
      {/* <button onClick={handleEditClick}>{!editMode? 'Edit' : 'Cancel'}</button> */}

      <div>

        <h4>{user.name}</h4>
         <p>{user.id}</p>

        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      <div className="user-edit">
        {editing && (
          <form onSubmit={handleSubmit}>
            <h4>Editing {user.name}</h4>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />

      
            <button type="submit">submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserCard;
