import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  //posts: any;
  posts: Post[] = [];
  item: any;
  //  days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  constructor(public postService: PostService) { }


  async ngOnInit() {
    // this.posts = await this.fetch();    //as define option 1
    //console.log(this.posts);
    this.postService.getAll().subscribe(
      (data: Post[]) => {
        this.posts = data;
        console.log(this.posts);

      })
  }

  deletePost(id: number) {
    this.postService.delete(id).subscribe(
      res => {
        this.posts = this.posts.filter(item => item.id != id);
        console.log('Post delete Successfully');
      }
    );
  }
  //function call option 1
  // async fetch() {
  //   return await this.postService.getAll().toPromise();
  // }

}
