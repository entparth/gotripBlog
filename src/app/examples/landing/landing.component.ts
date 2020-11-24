import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BlogPost}            from '../../models/blog-post';
import {DatabaseService}     from '../../database.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    // styles: ['.demo {weight:2em}'],
    encapsulation: ViewEncapsulation.None,

})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  readonly blogs: BlogPost[] = this.database.getPosts();
  readonly policy = this.database.getPolicies();

  constructor(private database: DatabaseService,
    private router: Router) { }

  ngOnInit() {
    console.log('this.policy',this.policy)
  }

  editPost(postUid?: string) {
    if (postUid) {
      this.router.navigate([`/edit/${postUid}`]);
    } else {
      this.router.navigate([`/edit/`]);
    }
  }

  readPost(postUid: string, blog:object) {
    // this.router.navigate();

    this.router.navigate([`/post/${postUid}`], {state: {data: {blog}}});
    console.log(blog)
  }


}
