import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'blogs',
    pathMatch:'full',
  },
  {
    path:'blogs',
    component:BlogComponent,
    canActivate:[authGuard],
  },
  {
    path:'auth',
    component:AuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
