import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blogReducer";

export const loadBlogs=createAction('[Blog] loadBlog');

export const setBlogs=createAction('[Blog] setBlog',props<{blog:BlogModel[]}>());

export const failLoadBlogs=createAction('[Blog] failBlog',props<{errorMsg:string}>());

export const addBlog=createAction('[Blog] addBlog',props<{blog:BlogModel}>());

export const editBlog=createAction('[Blog] editBlog',props<{blog:BlogModel}>());

export const deleteBlog=createAction('[Blog] deleteBlog',props<{id:number}>());