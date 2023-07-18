import React, { useEffect } from "react";
import { usePostsContext } from "../contexts/PostsContext";
import PostsItem from "../components/PostItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PostsList() {
  const navigate = useNavigate();
  const { posts, getPosts } = usePostsContext();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
        gap: "30px",
      }}
    >
      <Button onClick={() => navigate("/add")}>Add new Post</Button>
      {posts.length > 0 ? (
        posts.map((item) => <PostsItem key={item.id} item={item} />)
      ) : (
        <h2>...Loading</h2>
      )}
    </div>
  );
}

export default PostsList;
