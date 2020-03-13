import React, { useState } from "react";
import PostEdit from "./PostEdit";

const PostCard = ({ post, deletePost, editPost }) => {
  const [editing, setEditing] = useState(false);
  const [postEdit, setPostEdit] = useState(post);
  const [editMode, setEditMode] = useState(false);

  const handleDeleteClick = () => {
    deletePost(post);
    window.location.reload();
  };

  const handleEditClick = () => {
    setEditing(true);
    setEditMode(!editMode);
  };

  const handleSubmit = e => {
    e.preventDefault();
    editPost(postEdit);
    setEditing(false);
    window.location.reload();
  };

  const handleChange = e => {
    setPostEdit({ ...postEdit, [e.target.name]: e.target.value });
  };

  return (
    <div className="post-cta">
      {/* <button onClick={handleEditClick}>{!editMode? 'Edit' : 'Cancel'}</button> */}

      <div>
        <h4>{post.text}</h4>
        {/* <p>{post.id}</p> */}

        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      <div className="post-edit">
        {editing && (
          <form onSubmit={handleSubmit}>
            <h4>Editing {post.text}</h4>
            <label htmlFor="text">Edit Entry</label>
            <textarea
              type="textbox"
              className="content-text"
              name="text"
              value={postEdit.text}
              onChange={handleChange}
            />

            {/*
TODO Add a content field into blog site
<label htmlFor='contents'>Contents</label>
                <textarea type='textbox' name='contents' className='content-text' value={postEdit.contents} onChange={handleChange}/>
*/}

            <button type="submit">submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostCard;
