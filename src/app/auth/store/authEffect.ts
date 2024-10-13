import { Actions, createEffect, ofType } from "@ngrx/effects";
import { authFail, authSuccess, autoLogin, login } from "./authAction";
import { AuthService } from "src/app/Service/auth.service";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "./authReducer";

@Injectable()
export class authEffect{
    constructor(private actions$:Actions,private authService:AuthService){}
    loginUser=createEffect(()=>this.actions$.pipe(
        ofType(login),
        switchMap((payload)=>{
            return this.authService.login(payload).pipe(
                tap((data)=>{
                    console.log(data);
                    localStorage.setItem('authToken',data.token);
                }),
                map((data)=>{
                    return authSuccess({user:data})
                }),
                catchError((errorRes)=>{
                    console.log(errorRes.error.error);
                    return of(authFail({errorMsg:errorRes.error.error}))
                })
            )
        })
    ))

    autoLogin=createEffect(()=>this.actions$.pipe(
        ofType(autoLogin),
        map(()=>{
            const userData=localStorage.getItem('authToken');
            if(!userData){
                return {type:'DUMMY'};
            }
            const loadUser:User={
                token:userData,
            }
            return authSuccess({user:loadUser});
        })
    ))
}