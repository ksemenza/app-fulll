import React, { useState } from "react";

const PostAdd = props => {
  const [post, setPost] = useState({ text: "", user_id: "" });

  const handleSubmit = e => {
    props.addPost(post);
    setPost({ text: "", user_id: post.user_id });
  };

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>New Entry</h2>

      <form className="form-add" onSubmit={handleSubmit}>
        <label htmlFor="text">Entry</label>
        <input
          required
          type="text"
          name="text"
          className="content-text"
          value={post.text}
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

export default PostAdd;
