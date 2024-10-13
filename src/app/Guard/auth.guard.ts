import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Appstate } from '../app.reducer';
import { map } from 'rxjs';

export const authGuard: CanActivateFn  = (route, state) => {
  let store=inject(Store<Appstate>);
  let router=inject(Router);

  return store.select('auth').pipe(map((item)=>{
    if(item.user){
      return true;
    }
    else{
      return router.createUrlTree(['/auth']);
    }
  }))
};
