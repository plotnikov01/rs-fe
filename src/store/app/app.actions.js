import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsList, createNewPost, deleteSelectedPost } from "src/api/posts";

export const fetchPostsList = createAsyncThunk(
  "app/fetch-posts-list",
  async (data, thunkApi) => {
    try {
      const response = await getPostsList();

      return response.data;
    } catch (error) {
      console.warn(error);
    }
  }
);

export const createPost = createAsyncThunk(
  "app/create-post",
  async (data, thunkApi) => {
    try {
      await createNewPost(data);

      thunkApi.dispatch(fetchPostsList());

      console.log("Posts Created Successfully");
    } catch (error) {
      console.warn(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "app/delete-post",
  async (data, thunkApi) => {
    try {
      const response = await deleteSelectedPost(data);

      console.log("response", response);

      thunkApi.dispatch(fetchPostsList());

      console.log("Posts Deleted Successfully");
    } catch (error) {
      console.warn(error);
    }
  }
);
