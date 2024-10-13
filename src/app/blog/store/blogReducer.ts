import { createReducer, on } from "@ngrx/store"
import { addBlog, deleteBlog, editBlog, failLoadBlogs, setBlogs } from "./blogAction"

export interface BlogModel {
    id: number,
    title: string,
    description: string,
}

export interface blog {
    isLoading: boolean,
    blogList: BlogModel[],
    ErrorMessage: string,
}

const blogstate: blog = {
    isLoading: false,
    blogList: [],
    ErrorMessage: '',
}

export const blogReducer = createReducer(blogstate,
    on(setBlogs, (state, payload) => {
        return {
            ...state,
            isLoading: false,
            blogList: payload.blog,
            ErrorMessage: '',
        }
    }),
    on(failLoadBlogs, (state, action) => {
        console.log(action)
        return {
            ...state,
            isLoading: false,
            blogList: [],
            ErrorMessage: action.errorMsg,
        }
    }),
    on(addBlog, (state, payload) => {
        const updatedBlogs = [...state.blogList, payload.blog];
        return {
            ...state,
            isLoading: false,
            blogList: updatedBlogs,
            ErrorMessage: '',
        }
    }),
    on(editBlog, (state, payload) => {
        const updatedBlog = [...state.blogList];
        const index = updatedBlog.findIndex(el => el.id == payload.blog.id);
        const latestBlog = {
            ...state.blogList[index],
            ...payload.blog,
        };
        updatedBlog[index] = latestBlog;

        return {
            ...state,
            isLoading: false,
            blogList: updatedBlog,
            ErrorMessage: '',
        }
    }),
    on(deleteBlog,(state,payload)=>{
        let Blogs=[...state.blogList];
        return {
            ...state,
            isLoading:false,
            blogList:Blogs.filter(el=>el.id!=payload.id),
            ErrorMessage:'',
        }
    })
)

