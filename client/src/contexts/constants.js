export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5001/api"
    : "https://shielded-hamlet-86304.herokuapp.com/api";
//export const apiUrl =
//  process.env.NODE_ENV !== "production"
//    ?  "https://shielded-hamlet-86304.herokuapp.com/api"
//    : "somedeployedURL";

export const LOCAL_STORAGE_TOKEN_NAME = "learnit-mern";

export const POSTS_LOADED_SUCCESS = "POSTS_LOADED_SUCCESS";
export const POSTS_LOADED_FAIL = "POSTS_LOADED_FAIL";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const FIND_POST = "FIND_POST";
