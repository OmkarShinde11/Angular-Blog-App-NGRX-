import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from '../blog/store/blogReducer';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getAllBlogs(){
    return this.http.get<BlogModel[]>('http://localhost:3000/blogs');
  }
}
