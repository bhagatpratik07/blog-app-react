import React, { useState, useRef } from "react";
import EditPost from "./EditPost";
import NewPost from "./NewPost";
import Post from "./Post";

const DisplayAllPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyNewPost, setIsModifyNewPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");
  // initialize ref
  const getTitle = useRef();
  const getContent = useRef();
  // functions
  const setPostTitle = (event) => {
    setTitle(event.target.value);
    //console.log(title);
  };

  const setPostContent = (event) => {
    setContent(event.target.value);
    //console.log(content);
  };

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };
  const toggleModifyNewPost = () => {
    setIsModifyNewPost(!isModifyNewPost);
  };
  const editPost = (id) => {
    setEditPostId(id);
    toggleModifyNewPost();
  };
  const deletePost = (id) => {
    const modifiedPost = allPosts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };

  const savePost = (event) => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { id, title, content }]);
    setTitle("");
    setContent("");
    console.log(allPosts);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map((eachPost) => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyNewPost();
  };

  if (isCreateNewPost) {
    return (
      <>
        <NewPost
          setPostTitle={setPostTitle}
          setPostContent={setPostContent}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
        />
      </>
    );
  } else if (isModifyNewPost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    });
    return (
      <EditPost
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        setPostTitle={setPostTitle}
        setPostContent={setPostContent}
      />
    );
  }
  return (
    <>
      <h2>All Posts</h2>
      {!allPosts.length ? (
        <div>
          <h3>There is nothing to see here!</h3>
          <p>create a new post to get started!</p>
        </div>
      ) : (
        allPosts.map((eachPost) => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })
      )}
      <br />
      <br />
      <section className="button-wrapper">
        <button className="button" onClick={toggleCreateNewPost}>
          Create New
        </button>
      </section>
    </>
  );
};
export default DisplayAllPosts;
