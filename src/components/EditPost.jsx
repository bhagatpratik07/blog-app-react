import React from "react";

function EditPost(props) {
  return (
    <>
      <section className="create-post">
        <form>
          <h1>Edit Post</h1>
          <input
            defaultValue={props.title}
            onChange={props.setPostTitle}
            type="text"
            placeholder="Title"
            size="35"
            required
          />
          <br />
          <br />
          <textarea
            defaultValue={props.content}
            onChange={props.setPostContent}
            placeholder="Content"
            rows="8"
            cols="42"
            required
          />
          <br />
          <br />
          <section className="button-wrapper">
            <button className="button" onClick={props.updatePost}>
              Update Post
            </button>
          </section>
        </form>
      </section>
    </>
  );
}

export default EditPost;
