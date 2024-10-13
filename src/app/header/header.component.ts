import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from '../app.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private store:Store<Appstate>,private router:Router){}
  isAuthenticate:boolean=false;
  ngOnInit(): void {
    this.store.select('auth').subscribe(data=>{
      if(data.user!=null){
        this.isAuthenticate=true;
        this.router.navigate(['/blogs']);
      }
      else if(data.Error!=''){
        alert(data.Error);
      }
    })
  }

  logOut(){
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth']);
  }

}
