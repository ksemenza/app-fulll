import React, { useState } from "react";

const UserAdd = props => {
  const [user, setUser] = useState({ name: ""});

  const handleSubmit = e => {
    props.addUser(user);
    setUser({ name: "" });
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>New User</h2>

      <form className="form-add" onSubmit={handleSubmit}>
        <label htmlFor="name">User</label>
        <input
          required
          type="name"
          name="name"
          className="content-text"
          value={user.name}
          onChange={handleChange}
        />
        {/*

  TODO: ADD CONTENT AND TILE ELEMENTS

  */}

        {/* <label htmlFor='contents'>Contents</label>
                <textarea required type='textbox' name='contents' className='content-text' value={post.contents} onChange={handleChange}/> */}

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserAdd;
