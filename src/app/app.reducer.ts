import { ActionReducerMap } from '@ngrx/store';
import * as fromBlog from './blog/store/blogReducer';
import * as fromAuth from './auth/store/authReducer';

export interface Appstate{
    blog:fromBlog.blog,
    auth:fromAuth.user,
}

export const appReducer:ActionReducerMap<Appstate>={
    blog:fromBlog.blogReducer,
    auth:fromAuth.userReducer,
}