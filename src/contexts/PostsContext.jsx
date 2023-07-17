import React, { createContext, useContext } from "react";

const postsContext = createContext();

export function usePostsContext() {
  return useContext(postsContext);
}

function PostsContext({ children }) {
  const value = {};
  return (
    <postsContext.Provider value={value}>{children}</postsContext.Provider>
  );
}

export default PostsContext;
