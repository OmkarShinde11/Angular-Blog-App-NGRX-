import { createAction, props } from "@ngrx/store";
import { User } from "./authReducer";

export let login=createAction('[auth] login',props<{email:string,password:string}>());

export let authSuccess=createAction('[auth] loginSuccess',props<{user:User}>());

export let authFail=createAction('[auth] loginFail',props<{errorMsg:string}>());

export let autoLogin=createAction('[auth] autoLogig');