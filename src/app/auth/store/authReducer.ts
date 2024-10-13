import { createReducer, on } from "@ngrx/store";
import { authFail, authSuccess } from "./authAction";

export interface User{
    token:string,
}

export interface user{
    user:User,
    isLoading:boolean,
    Error:string,
}

const initialState:user={
    user:null,
    isLoading:false,
    Error:'',
}

export const userReducer=createReducer(initialState,
    on(authSuccess,(state,payload)=>{
        return {
            ...state,
            user:payload.user,
            isLoading:false,
            Error:'',
        }
    }),
    on(authFail,(state,payload)=>{
        return{
            ...state,
            user:null,
            isLoading:false,
            Error:payload.errorMsg,
        }
    })
    )