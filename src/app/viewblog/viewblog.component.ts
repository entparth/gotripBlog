import {Component, OnInit,ViewEncapsulation}          from '@angular/core';
import {Observable}         from 'rxjs';
import {BlogPost}           from '../../app/models/blog-post';
import {DatabaseService}    from '../../app/database.service';
import {ActivatedRoute}     from '@angular/router';
import {filter, map, pluck} from 'rxjs/operators';
import {objectExists}       from '../../app/utilities.service';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ViewblogComponent implements OnInit {

  constructor(private db: DatabaseService,
    private router: ActivatedRoute, private sanitizer: DomSanitizer) { }

// post$   = history.state.data.blog

    post$: Observable<BlogPost> =  this.router.params.pipe(pluck('uid'),
    filter(objectExists),
    map(this.db.getPost));
    
    // blog = this.sanitizer.bypassSecurityTrustHtml( this.post$.body)

  ngOnInit(): void {
    console.log('bloggereee', history.state.data)
    // history.pushState({data: {}}, '', '');

  }

  

}
