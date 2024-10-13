import { Actions, createEffect, ofType } from "@ngrx/effects";
import { failLoadBlogs, loadBlogs, setBlogs } from "./blogAction";
import { catchError, map, of, switchMap, tap, throwError } from "rxjs";
import { BlogService } from "src/app/Service/blog.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


const handleError=(error:any)=>{
    console.log(error.message);
    return of(failLoadBlogs({errorMsg:error.message}));
}
@Injectable()
export class blogEffect{
    constructor(private actions$:Actions,private blogService:BlogService,private http:HttpClient){}
    loadBlogs=createEffect(()=>this.actions$.pipe(
        ofType(loadBlogs),
        switchMap(()=>{
            return this.blogService.getAllBlogs().pipe(
                tap((data)=>{
                    console.log(data);
                }),
                map((data)=>{
                    return setBlogs({blog:data})
                }),
                catchError((errorRes)=>{
                    // return throwError(()=> handleError(errorRes));
                    return of(failLoadBlogs({errorMsg:errorRes.message}));
                })
            )
        })
    ))
}