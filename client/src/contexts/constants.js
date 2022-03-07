export const apiUrl =
  process.env.NOE_ENV !== "production"
    ? "http://localhost:5001/api"
    : "somedeployedURL";

export const LOCAL_STORAGE_TOKEN_NAME = 'learnit-mern'