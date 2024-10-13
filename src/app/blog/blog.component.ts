import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBlog, deleteBlog, editBlog, loadBlogs } from './store/blogAction';
import { Appstate } from '../app.reducer';
import { BlogModel } from './store/blogReducer';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogInfo:any;
  blogList:BlogModel[]=[];
  isLoading:boolean=false;
  constructor(private store:Store<Appstate>){}
  ngOnInit(): void {
    this.isLoading=true;
    this.store.dispatch(loadBlogs());
    this.store.select('blog').subscribe(item=>{
      this.blogInfo=item;
      console.log(item);
      this.isLoading=item.isLoading;
      this.blogList=item.blogList;
    })
  }

  addBlog(){
    this.store.dispatch(addBlog({blog:{id:3,title:'Random-title',description:'Random-desc'}}));
  }

  editBlog(){
    this.store.dispatch(editBlog({blog:{id:2,title:'Updated-title',description:'Updated-desc'}}));
  }

  deleteBlog(){
    this.store.dispatch(deleteBlog({id:2}));
  }

}