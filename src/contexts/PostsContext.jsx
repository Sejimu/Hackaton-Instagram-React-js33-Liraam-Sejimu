import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, APIposts } from "../utils/consts";

const postsContext = createContext();

export function usePostsContext() {
  return useContext(postsContext);
}

const init = {
  posts: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.posts:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
}

function PostsContext({ children }) {
  const [state, dispatch] = useReducer(reducer, init);
  async function getPosts() {
    try {
      const { data } = await axios(APIposts);
      dispatch({
        type: ACTIONS.posts,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    getPosts,
    posts: state.posts,
  };

  return (
    <postsContext.Provider value={value}>{children}</postsContext.Provider>
  );
}

export default PostsContext;
