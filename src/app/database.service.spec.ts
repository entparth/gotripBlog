import { Injectable }       from '@angular/core';
import {BlogPost}                                  from '../app/models/blog-post';
import {addOrReplaceByProp, removeFromArrayByProp} from '../app/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private dummyData: BlogPost[] = [
    {
      title: 'When I met nature',
    body: 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.',
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '1',
      image:"../assets/img/bruno-abatti.jpg"
    },
    {
      title: 'When it was all me',
    body: 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.',
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '2',
      image:"../assets/img/leh.jpg"
    },
    {
      title: 'Blog Post #3',
    body: 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.',
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '3',
      image:"../assets/img/leh.jpg"
    },
    {
      title: 'Blog Post #4',
    body: 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.',
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '4',
      image:"../assets/img/leh.jpg"
    }
  ];

  constructor() { }

  getPosts(): BlogPost[] {
    console.log('returning all dummy data', this.dummyData);
    return this.dummyData;
  }

  getPost = (uid: string): BlogPost => {
    console.log('returning dummy data', this.dummyData.find(data => data.uid === uid) );
    return this.dummyData.find(data => data.uid === uid);
  };

  /**
   * Adds a post if it isn't in the list
   * Updates a post if it is in the list
   * @param post
   */
  updatePost(post: BlogPost) {
    this.dummyData = addOrReplaceByProp(this.dummyData, 'uid', post.uid, post);
  }

  deletePost(post: BlogPost) {
    this.dummyData = removeFromArrayByProp(this.dummyData, 'uid', post.uid);
  }
}
