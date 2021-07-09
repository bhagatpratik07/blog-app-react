import React from "react";

const NewPost = (props) => {
  return (
    <>
      <section className="create-post">
        <form onSubmit={props.savePost}>
          <h1>Create New Post</h1>
          <input
            onChange={props.setPostTitle}
            ref={props.getTitle}
            type="text"
            placeholder="Title"
            size="35"
            required
          />
          <br />
          <br />
          <textarea
            onChange={props.setPostContent}
            ref={props.getContent}
            placeholder="Content"
            rows="8"
            cols="42"
            required
          />
          <br />
          <br />
          <section className="button-wrapper">
            <button className="button">Save Post</button>
          </section>
        </form>
      </section>
    </>
  );
};

export default NewPost;
