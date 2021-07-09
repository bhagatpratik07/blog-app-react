import React from "react";

function Post({ title, content, editPost, id, deletePost }) {
  return (
    <>
      <section className="post-container">
        <h3>{title}</h3>
        <p>{content}</p>
        <button className="button" onClick={() => editPost(id)}>
          Edit
        </button>
        <button className="button" onClick={() => deletePost(id)}>
          Delete
        </button>
      </section>
    </>
  );
}
export default Post;
